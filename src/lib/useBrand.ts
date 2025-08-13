import { useState, useEffect } from 'react';
import { 
  applyBrandTheme, 
  getCurrentBrand, 
  availableBrands, 
  type BrandTheme 
} from './brands';

export interface UseBrandReturn {
  currentBrand: string;
  availableBrands: BrandTheme[];
  setBrand: (brandId: string) => void;
  getCurrentBrandTheme: () => BrandTheme | undefined;
}

export const useBrand = (): UseBrandReturn => {
  const [currentBrand, setCurrentBrand] = useState<string>(() => {
    // Initialiser avec la brand sauvegardée ou par défaut
    if (typeof window !== 'undefined') {
      return getCurrentBrand();
    }
    return 'stride';
  });

  const setBrand = (brandId: string) => {
    // Ajouter une classe temporaire pour désactiver les transitions
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('brand-switching');
    }
    
    // Appliquer le nouveau thème
    applyBrandTheme(brandId);
    setCurrentBrand(brandId);
    
    // Retirer la classe après un court délai
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('brand-switching');
      }
    }, 50);
  };

  const getCurrentBrandTheme = () => {
    return availableBrands.find(brand => brand.id === currentBrand);
  };

  // Initialiser le brand au montage du composant
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedBrand = getCurrentBrand();
      if (savedBrand !== currentBrand) {
        setBrand(savedBrand);
      }
    }
  }, []);

  return {
    currentBrand,
    availableBrands,
    setBrand,
    getCurrentBrandTheme,
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