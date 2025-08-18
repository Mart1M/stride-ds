import { useState, useEffect } from 'react';
import { 
  applyBrandTheme, 
  getCurrentBrand,
  getCurrentBrandType,
  availableBrands, 
  getAllBrands,
  getDynamicBrand,
  isDynamicBrand,
  type BrandTheme,
  type DynamicBrandConfig,
  configureDynamicBrandSystem,
  registerDynamicBrand,
  unregisterDynamicBrand,
  getAllDynamicBrands,
  clearAllDynamicBrands,

  type DynamicBrandSystemConfig
} from './brands';

export interface UseBrandReturn {
  currentBrand: string;
  currentBrandType: 'static' | 'dynamic';
  availableBrands: BrandTheme[];
  dynamicBrands: DynamicBrandConfig[];
  allBrands: Array<BrandTheme | DynamicBrandConfig>;
  setBrand: (brandId: string) => void;
  getCurrentBrandTheme: () => BrandTheme | DynamicBrandConfig | undefined;
  
  // Gestion des marques dynamiques
  registerDynamicBrand: (config: DynamicBrandConfig) => void;
  unregisterDynamicBrand: (brandId: string) => boolean;
  isDynamicBrand: (brandId: string) => boolean;
  clearAllDynamicBrands: () => void;
  
  // Configuration du système
  configureDynamicSystem: (config: Partial<DynamicBrandSystemConfig>) => void;
}

export const useBrand = (): UseBrandReturn => {
  const [currentBrand, setCurrentBrand] = useState<string>(() => {
    // Initialiser avec la brand sauvegardée ou par défaut
    if (typeof window !== 'undefined') {
      return getCurrentBrand();
    }
    return 'stride';
  });

  const [currentBrandType, setCurrentBrandType] = useState<'static' | 'dynamic'>(() => {
    if (typeof window !== 'undefined') {
      return getCurrentBrandType();
    }
    return 'static';
  });

  const [dynamicBrands, setDynamicBrands] = useState<DynamicBrandConfig[]>(() => {
    return getAllDynamicBrands();
  });

  const setBrand = (brandId: string) => {
    // Appliquer le nouveau thème (la fonction applyBrandTheme gère déjà les transitions)
    applyBrandTheme(brandId);
    setCurrentBrand(brandId);
    setCurrentBrandType(isDynamicBrand(brandId) ? 'dynamic' : 'static');
  };

  const getCurrentBrandTheme = (): BrandTheme | DynamicBrandConfig | undefined => {
    if (isDynamicBrand(currentBrand)) {
      return getDynamicBrand(currentBrand);
    }
    return availableBrands.find(brand => brand.id === currentBrand);
  };

  // Wrapper pour registerDynamicBrand avec mise à jour de l'état
  const handleRegisterDynamicBrand = (config: DynamicBrandConfig) => {
    registerDynamicBrand(config);
    setDynamicBrands(getAllDynamicBrands());
  };

  // Wrapper pour unregisterDynamicBrand avec mise à jour de l'état
  const handleUnregisterDynamicBrand = (brandId: string): boolean => {
    const success = unregisterDynamicBrand(brandId);
    if (success) {
      setDynamicBrands(getAllDynamicBrands());
      // Si c'était la marque active, revenir à la marque par défaut
      if (currentBrand === brandId) {
        const fallbackBrand = 'stride'; // ou dynamicBrandSystemConfig.defaultFallbackBrand
        setBrand(fallbackBrand);
      }
    }
    return success;
  };

  // Wrapper pour clearAllDynamicBrands avec mise à jour de l'état
  const handleClearAllDynamicBrands = () => {
    const wasCurrentDynamic = isDynamicBrand(currentBrand);
    clearAllDynamicBrands();
    setDynamicBrands([]);
    
    // Si la marque actuelle était dynamique, revenir à la marque par défaut
    if (wasCurrentDynamic) {
      const fallbackBrand = 'stride';
      setBrand(fallbackBrand);
    }
  };

  // Wrapper pour configureDynamicBrandSystem
  const handleConfigureDynamicSystem = (config: Partial<DynamicBrandSystemConfig>) => {
    configureDynamicBrandSystem(config);
  };

  // Initialiser le brand au montage du composant
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedBrand = getCurrentBrand();
      const savedBrandType = getCurrentBrandType();
      
      if (savedBrand !== currentBrand || savedBrandType !== currentBrandType) {
        setCurrentBrand(savedBrand);
        setCurrentBrandType(savedBrandType);
        // Appliquer le thème (déjà fait par initializeBrand dans brands.ts)
      }
    }
  }, [currentBrand, currentBrandType]);

  // Mettre à jour dynamicBrands quand il y a des changements
  useEffect(() => {
    const updateDynamicBrands = () => {
      setDynamicBrands(getAllDynamicBrands());
    };

    // Écouter les changements dans le localStorage pour les marques dynamiques
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', updateDynamicBrands);
      return () => window.removeEventListener('storage', updateDynamicBrands);
    }
  }, []);

  return {
    currentBrand,
    currentBrandType,
    availableBrands,
    dynamicBrands,
    allBrands: getAllBrands(),
    setBrand,
    getCurrentBrandTheme,
    
    // Gestion des marques dynamiques
    registerDynamicBrand: handleRegisterDynamicBrand,
    unregisterDynamicBrand: handleUnregisterDynamicBrand,
    isDynamicBrand,
    clearAllDynamicBrands: handleClearAllDynamicBrands,
    
    // Configuration du système
    configureDynamicSystem: handleConfigureDynamicSystem,
  };
};

// Hook pour écouter les changements de brand (utile pour les composants)
export const useBrandTheme = () => {
  const { currentBrand, getCurrentBrandTheme } = useBrand();
  const [theme, setTheme] = useState(() => getCurrentBrandTheme());

  useEffect(() => {
    setTheme(getCurrentBrandTheme());
  }, [currentBrand, getCurrentBrandTheme]);

  return theme;
};