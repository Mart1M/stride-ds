// Multi-brand system for Stride Design System

export interface BrandTheme {
  id: string;
  name: string;
  description: string;
}

// ===============================================
// 🎨 DYNAMIC BRAND SYSTEM (WHITE-LABEL)
// ===============================================

// Tokens core (couleurs de base) - TOUS OPTIONNELS
export interface CoreBrandTokens {
  primary?: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string; // Même la couleur principale est optionnelle
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };
  
  neutral?: {
    0?: string;
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
  };

  success?: {
    50?: string;
    100?: string;
    500?: string;
    600?: string;
    700?: string;
  };

  warning?: {
    50?: string;
    100?: string;
    500?: string;
    600?: string;
    700?: string;
  };

  danger?: {
    50?: string;
    100?: string;
    500?: string;
    600?: string;
    700?: string;
  };
}

// Tokens sémantiques (peuvent prendre des valeurs en dur)
export interface SemanticBrandTokens {
  // Texte
  textPrimary?: string;           // Peut être "#000000" ou "var(--brand-neutral-900)"
  textSecondary?: string;
  textTertiary?: string;
  textInverse?: string;
  textDisabled?: string;
  textLink?: string;
  textLinkHover?: string;
  textBrand?: string;

  // Backgrounds
  bgPrimary?: string;
  bgSecondary?: string;
  bgTertiary?: string;
  bgInverse?: string;
  bgDisabled?: string;
  bgOverlay?: string;
  bgTooltip?: string;

  // Interactive
  interactivePrimary?: string;
  interactivePrimaryHover?: string;
  interactivePrimaryActive?: string;
  interactivePrimaryDisabled?: string;
  interactiveSecondary?: string;
  interactiveSecondaryHover?: string;
  interactiveSecondaryActive?: string;
  interactiveDisabled?: string;

  // Borders
  borderPrimary?: string;
  borderSecondary?: string;
  borderFocus?: string;
  borderError?: string;
  borderSuccess?: string;
  borderWarning?: string;

  // Status
  statusSuccess?: string;
  statusSuccessBg?: string;
  statusSuccessText?: string;
  statusWarning?: string;
  statusWarningBg?: string;
  statusWarningText?: string;
  statusDanger?: string;
  statusDangerBg?: string;
  statusDangerText?: string;

  // Surfaces
  surfaceCard?: string;
  surfaceModal?: string;
  surfacePopover?: string;
  surfaceTooltip?: string;
}

// Tokens de typographie
export interface TypographyBrandTokens {
  fontFamilyPrimary?: string;
  fontFamilySecondary?: string;
  fontWeightNormal?: string;
  fontWeightMedium?: string;
  fontWeightSemibold?: string;
  fontWeightBold?: string;
}

// Tokens de layout
export interface LayoutBrandTokens {
  spacingScale?: number;
  radiusScale?: number;
  radiusCard?: string;
  radiusButton?: string;
  radiusInput?: string;
  shadowSm?: string;
  shadowMd?: string;
  shadowLg?: string;
  transitionFast?: string;
  transitionNormal?: string;
  transitionSlow?: string;
}

// Configuration complète d'une marque dynamique
export interface DynamicBrandConfig {
  id: string;
  name: string;
  description?: string;
  
  // Tokens organisés par catégorie
  tokens: {
    core?: CoreBrandTokens;
    semantic?: SemanticBrandTokens;
    typography?: TypographyBrandTokens;
    layout?: LayoutBrandTokens;
    custom?: Record<string, string>; // Variables CSS custom
  };
  
  // Configuration du fallback
  fallback?: {
    brand?: string;           // Marque de fallback (par défaut: configurable globalement)
    useSemanticFallback?: boolean; // Si true, utilise les tokens sémantiques de la marque fallback
  };
}

// Configuration globale du système de marques dynamiques
export interface DynamicBrandSystemConfig {
  defaultFallbackBrand: string;    // Marque fallback par défaut (paramétrable)
  enableLocalStorage: boolean;     // Activer la persistence
  enableTransitions: boolean;      // Activer les transitions lors du changement
  transitionDuration: number;      // Durée des transitions en ms
}

// Brand definitions - colors and properties are defined in brands.css
export const strideBrand: BrandTheme = {
  id: 'stride',
  name: 'Stride',
  description: 'Default Stride Design System brand with blue primary colors',
};

export const coralBrand: BrandTheme = {
  id: 'coral',
  name: 'Coral',
  description: 'Coral theme with warm orange-red primary colors and no button radius',
};

export const forestBrand: BrandTheme = {
  id: 'forest',
  name: 'Forest',
  description: 'Forest theme with natural green primary colors and generous spacing',
};

export const runswapBrand: BrandTheme = {
  id: 'runswap',
  name: 'Runswap',
  description: 'Runswap theme with purple primary colors',
};

export const acmeBrand: BrandTheme = {
  id: 'acme',
  name: 'Acme',
  description: 'Acme theme with indigo primary colors and modern tech aesthetic',
};

// Registry des brands disponibles
export const availableBrands: BrandTheme[] = [
  strideBrand,
  coralBrand,
  forestBrand,
  runswapBrand,
  acmeBrand,
];

export const getBrandById = (brandId: string): BrandTheme | undefined => {
  return availableBrands.find(brand => brand.id === brandId);
};

export const getDefaultBrand = (): BrandTheme => strideBrand;

// ===============================================
// 🚀 DYNAMIC BRAND SYSTEM IMPLEMENTATION
// ===============================================

// Configuration globale par défaut
let dynamicBrandSystemConfig: DynamicBrandSystemConfig = {
  defaultFallbackBrand: 'stride',
  enableLocalStorage: true,
  enableTransitions: true,
  transitionDuration: 50,
};

// Registry des marques dynamiques
const dynamicBrands = new Map<string, DynamicBrandConfig>();

// Configurer le système de marques dynamiques
export const configureDynamicBrandSystem = (config: Partial<DynamicBrandSystemConfig>): void => {
  dynamicBrandSystemConfig = { ...dynamicBrandSystemConfig, ...config };
  console.info('🎨 Dynamic brand system configured:', dynamicBrandSystemConfig);
};

// Obtenir la configuration actuelle
export const getDynamicBrandSystemConfig = (): DynamicBrandSystemConfig => {
  return { ...dynamicBrandSystemConfig };
};

// Enregistrer une marque dynamique
export const registerDynamicBrand = (config: DynamicBrandConfig): void => {
  // Validation de base
  if (!config.id || !config.name) {
    throw new Error('Dynamic brand must have an id and name');
  }

  if (dynamicBrands.has(config.id)) {
    console.warn(`⚠️ Dynamic brand "${config.id}" already exists, overwriting...`);
  }

  // Définir la marque fallback si non spécifiée
  const finalConfig: DynamicBrandConfig = {
    ...config,
    fallback: {
      brand: dynamicBrandSystemConfig.defaultFallbackBrand,
      useSemanticFallback: true,
      ...config.fallback,
    },
  };

  dynamicBrands.set(config.id, finalConfig);
  
  // Sauvegarder en localStorage si activé
  if (dynamicBrandSystemConfig.enableLocalStorage && typeof window !== 'undefined') {
    try {
      localStorage.setItem(`stride-dynamic-brand:${config.id}`, JSON.stringify(finalConfig));
    } catch (error) {
      console.warn('Failed to save dynamic brand to localStorage:', error);
    }
  }

  console.info(`✅ Dynamic brand "${config.name}" (${config.id}) registered successfully`);
};

// Récupérer une marque dynamique
export const getDynamicBrand = (brandId: string): DynamicBrandConfig | undefined => {
  return dynamicBrands.get(brandId);
};

// Récupérer toutes les marques dynamiques
export const getAllDynamicBrands = (): DynamicBrandConfig[] => {
  return Array.from(dynamicBrands.values());
};

// Vérifier si une marque est dynamique
export const isDynamicBrand = (brandId: string): boolean => {
  return dynamicBrands.has(brandId);
};

// Supprimer une marque dynamique
export const unregisterDynamicBrand = (brandId: string): boolean => {
  const success = dynamicBrands.delete(brandId);
  
  if (success) {
    // Nettoyer le localStorage
    if (dynamicBrandSystemConfig.enableLocalStorage && typeof window !== 'undefined') {
      localStorage.removeItem(`stride-dynamic-brand:${brandId}`);
    }
    
    // Nettoyer les styles appliqués si cette marque était active
    if (typeof document !== 'undefined') {
      const currentBrand = getCurrentBrand();
      if (currentBrand === brandId) {
        // Revenir à la marque par défaut
        applyBrandTheme(dynamicBrandSystemConfig.defaultFallbackBrand);
      }
      removeDynamicBrandStyles(brandId);
    }
    
    console.info(`🗑️ Dynamic brand "${brandId}" unregistered successfully`);
  }
  
  return success;
};

// Appliquer une marque dynamique
export const applyDynamicBrandTheme = (brandId: string): void => {
  const dynamicBrand = getDynamicBrand(brandId);
  if (!dynamicBrand) {
    console.error(`❌ Dynamic brand "${brandId}" not found`);
    return;
  }

  if (typeof document === 'undefined') {
    console.warn('Cannot apply dynamic brand theme on server side');
    return;
  }

  const root = document.documentElement;

  // Ajouter classe de transition si activée
  if (dynamicBrandSystemConfig.enableTransitions) {
    root.classList.add('brand-switching');
  }

  // Nettoyer les classes de marques existantes
  cleanupExistingBrandClasses();

  // Appliquer la marque fallback d'abord
  const fallbackBrand = dynamicBrand.fallback?.brand || dynamicBrandSystemConfig.defaultFallbackBrand;
  if (fallbackBrand) {
    root.classList.add(`brand-${fallbackBrand}`);
  }

  // Appliquer la classe de marque dynamique
  root.classList.add(`brand-dynamic-${brandId}`);

  // Générer et appliquer les styles CSS
  updateDynamicBrandStyles(dynamicBrand);

  // Sauvegarder en localStorage si activé
  if (dynamicBrandSystemConfig.enableLocalStorage) {
    localStorage.setItem('stride-brand', `dynamic:${brandId}`);
  }

  // Retirer la classe de transition après le délai configuré
  if (dynamicBrandSystemConfig.enableTransitions) {
    setTimeout(() => {
      root.classList.remove('brand-switching');
    }, dynamicBrandSystemConfig.transitionDuration);
  }

  console.info(`🎨 Applied dynamic brand: ${dynamicBrand.name} (${brandId})`);
};

// Nettoyer les classes de marques existantes
const cleanupExistingBrandClasses = (): void => {
  const root = document.documentElement;
  
  // Retirer les classes des marques statiques
  const staticBrandClasses = availableBrands.map(b => `brand-${b.id}`);
  root.classList.remove(...staticBrandClasses);
  
  // Retirer les classes des marques dynamiques
  const dynamicBrandClasses = Array.from(root.classList)
    .filter(cls => cls.startsWith('brand-dynamic-'));
  root.classList.remove(...dynamicBrandClasses);
};

// Générer et appliquer les styles CSS pour une marque dynamique
const updateDynamicBrandStyles = (brand: DynamicBrandConfig): void => {
  const styleId = `dynamic-brand-${brand.id}`;
  let styleElement = document.getElementById(styleId) as HTMLStyleElement;
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  const cssRules: string[] = [];
  const selector = `.brand-dynamic-${brand.id}`;

  // === TOKENS CORE ===
  if (brand.tokens.core) {
    // Primary colors
    if (brand.tokens.core.primary) {
      Object.entries(brand.tokens.core.primary).forEach(([shade, color]) => {
        if (color) cssRules.push(`  --brand-primary-${shade}: ${color};`);
      });
    }

    // Neutral colors
    if (brand.tokens.core.neutral) {
      Object.entries(brand.tokens.core.neutral).forEach(([shade, color]) => {
        if (color) cssRules.push(`  --brand-neutral-${shade}: ${color};`);
      });
    }

    // Success colors
    if (brand.tokens.core.success) {
      Object.entries(brand.tokens.core.success).forEach(([shade, color]) => {
        if (color) cssRules.push(`  --brand-success-${shade}: ${color};`);
      });
    }

    // Warning colors
    if (brand.tokens.core.warning) {
      Object.entries(brand.tokens.core.warning).forEach(([shade, color]) => {
        if (color) cssRules.push(`  --brand-warning-${shade}: ${color};`);
      });
    }

    // Danger colors
    if (brand.tokens.core.danger) {
      Object.entries(brand.tokens.core.danger).forEach(([shade, color]) => {
        if (color) cssRules.push(`  --brand-danger-${shade}: ${color};`);
      });
    }
  }

  // === TOKENS SÉMANTIQUES ===
  if (brand.tokens.semantic) {
    Object.entries(brand.tokens.semantic).forEach(([tokenName, value]) => {
      if (value) {
        // Convertir camelCase en kebab-case
        const cssVarName = tokenName.replace(/([A-Z])/g, '-$1').toLowerCase();
        cssRules.push(`  --${cssVarName}: ${value};`);
      }
    });
  }

  // === TOKENS TYPOGRAPHIE ===
  if (brand.tokens.typography) {
    Object.entries(brand.tokens.typography).forEach(([tokenName, value]) => {
      if (value) {
        const cssVarName = tokenName.replace(/([A-Z])/g, '-$1').toLowerCase();
        cssRules.push(`  --${cssVarName}: ${value};`);
      }
    });
  }

  // === TOKENS LAYOUT ===
  if (brand.tokens.layout) {
    Object.entries(brand.tokens.layout).forEach(([tokenName, value]) => {
      if (value) {
        const cssVarName = tokenName.replace(/([A-Z])/g, '-$1').toLowerCase();
        cssRules.push(`  --${cssVarName}: ${value};`);
      }
    });
  }

  // === VARIABLES CUSTOM ===
  if (brand.tokens.custom) {
    Object.entries(brand.tokens.custom).forEach(([varName, value]) => {
      if (value) {
        // Assurer que la variable commence par --
        const cssVarName = varName.startsWith('--') ? varName : `--${varName}`;
        cssRules.push(`  ${cssVarName}: ${value};`);
      }
    });
  }

  // Générer le CSS final
  const css = cssRules.length > 0 
    ? `${selector} {\n${cssRules.join('\n')}\n}`
    : `/* No tokens defined for ${brand.name} */`;

  styleElement.textContent = css;
};

// Supprimer les styles d'une marque dynamique
const removeDynamicBrandStyles = (brandId: string): void => {
  const styleElement = document.getElementById(`dynamic-brand-${brandId}`);
  if (styleElement) {
    styleElement.remove();
  }
};

// Restaurer les marques dynamiques depuis localStorage au chargement
export const restoreDynamicBrandsFromStorage = (): void => {
  if (!dynamicBrandSystemConfig.enableLocalStorage || typeof window === 'undefined') {
    return;
  }

  try {
    // Restaurer toutes les marques dynamiques sauvegardées
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('stride-dynamic-brand:')) {
        const brandId = key.replace('stride-dynamic-brand:', '');
        const storedConfig = localStorage.getItem(key);
        
        if (storedConfig) {
          try {
            const config: DynamicBrandConfig = JSON.parse(storedConfig);
            registerDynamicBrand(config);
          } catch (error) {
            console.warn(`Failed to restore dynamic brand ${brandId}:`, error);
            localStorage.removeItem(key);
          }
        }
      }
    });

    // Appliquer la marque actuelle si elle est dynamique
    const currentBrand = localStorage.getItem('stride-brand');
    if (currentBrand?.startsWith('dynamic:')) {
      const brandId = currentBrand.replace('dynamic:', '');
      if (dynamicBrands.has(brandId)) {
        applyDynamicBrandTheme(brandId);
      } else {
        // Marque dynamique non trouvée, revenir au fallback
        console.warn(`Dynamic brand ${brandId} not found, reverting to fallback`);
        localStorage.setItem('stride-brand', dynamicBrandSystemConfig.defaultFallbackBrand);
        applyBrandTheme(dynamicBrandSystemConfig.defaultFallbackBrand);
      }
    }
  } catch (error) {
    console.error('Failed to restore dynamic brands from storage:', error);
  }
};

// Fonction pour appliquer un thème de brand (statique ou dynamique)
export const applyBrandTheme = (brandId: string): void => {
  // Vérifier d'abord si c'est une marque dynamique
  if (isDynamicBrand(brandId)) {
    applyDynamicBrandTheme(brandId);
    return;
  }

  // Gérer les marques statiques
  const brand = getBrandById(brandId);
  if (!brand) {
    console.warn(`❌ Brand "${brandId}" not found`);
    return;
  }

  if (typeof document === 'undefined') {
    console.warn('Cannot apply brand theme on server side');
    return;
  }

  // Ajouter classe de transition si activée
  if (dynamicBrandSystemConfig.enableTransitions) {
    document.documentElement.classList.add('brand-switching');
  }

  // Nettoyer les classes de marques existantes (statiques et dynamiques)
  cleanupExistingBrandClasses();
  
  // Appliquer la nouvelle classe de brand statique
  document.documentElement.classList.add(`brand-${brand.id}`);
  
  // Stocker le choix dans localStorage
  if (dynamicBrandSystemConfig.enableLocalStorage && typeof window !== 'undefined') {
    localStorage.setItem('stride-brand', brandId);
  }

  // Retirer la classe de transition
  if (dynamicBrandSystemConfig.enableTransitions) {
    setTimeout(() => {
      document.documentElement.classList.remove('brand-switching');
    }, dynamicBrandSystemConfig.transitionDuration);
  }

  console.info(`🎨 Applied static brand: ${brand.name} (${brandId})`);
};

// Fonction pour récupérer le brand actuel
export const getCurrentBrand = (): string => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('stride-brand') || dynamicBrandSystemConfig.defaultFallbackBrand;
    // Si c'est une marque dynamique, retourner l'ID sans le préfixe
    if (stored.startsWith('dynamic:')) {
      return stored.replace('dynamic:', '');
    }
    return stored;
  }
  return dynamicBrandSystemConfig.defaultFallbackBrand;
};

// Fonction pour récupérer le type du brand actuel
export const getCurrentBrandType = (): 'static' | 'dynamic' => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('stride-brand') || dynamicBrandSystemConfig.defaultFallbackBrand;
    return stored.startsWith('dynamic:') ? 'dynamic' : 'static';
  }
  return 'static';
};

// Fonction pour initialiser le brand au chargement
export const initializeBrand = (): void => {
  // Restaurer les marques dynamiques d'abord
  restoreDynamicBrandsFromStorage();
  
  // Puis appliquer la marque actuelle
  const savedBrand = getCurrentBrand();
  applyBrandTheme(savedBrand);
};

// Fonction utilitaire pour obtenir toutes les marques (statiques + dynamiques)
export const getAllBrands = (): Array<BrandTheme | DynamicBrandConfig> => {
  const staticBrands = [...availableBrands];
  const dynamicBrands = getAllDynamicBrands();
  return [...staticBrands, ...dynamicBrands];
};

// Fonction utilitaire pour valider les tokens de couleur
export const isValidColor = (color: string): boolean => {
  if (typeof document === 'undefined') return true; // Skip validation sur le serveur
  
  const testElement = document.createElement('div');
  testElement.style.color = color;
  return testElement.style.color !== '';
};

// Fonction utilitaire pour nettoyer toutes les marques dynamiques
export const clearAllDynamicBrands = (): void => {
  const brandIds = Array.from(dynamicBrands.keys());
  brandIds.forEach(brandId => {
    unregisterDynamicBrand(brandId);
  });
  console.info('🧹 All dynamic brands cleared');
};

// Fonction pour exporter les tokens d'une marque dynamique en CSS
export const exportDynamicBrandToCSS = (brandId: string): string | null => {
  const brand = getDynamicBrand(brandId);
  if (!brand) {
    return null;
  }

  const cssRules: string[] = [];
  const selector = `.brand-dynamic-${brandId}`;

  // Générer les règles CSS (réutilise la logique d'updateDynamicBrandStyles)
  // Cette fonction pourrait être extraite pour éviter la duplication
  
  return cssRules.length > 0 
    ? `${selector} {\n${cssRules.join('\n')}\n}`
    : `/* No tokens defined for ${brand.name} */`;
};

// ===============================================
// 🎨 UTILITIES & HELPERS
// ===============================================

// Générer une palette de couleurs depuis une couleur primaire
export const generateColorPalette = (baseColor: string): CoreBrandTokens['primary'] => {
  // Cette fonction nécessiterait une librairie comme chroma.js ou polished pour générer les nuances
  // Pour l'instant, on retourne la couleur de base
  console.warn('generateColorPalette is a placeholder - implement with a color manipulation library');
  return {
    500: baseColor,
    // TODO: Implémenter la génération automatique de palette
  };
};

// Valider une configuration de marque dynamique
export const validateDynamicBrandConfig = (config: DynamicBrandConfig): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!config.id || typeof config.id !== 'string') {
    errors.push('Brand ID is required and must be a string');
  }

  if (!config.name || typeof config.name !== 'string') {
    errors.push('Brand name is required and must be a string');
  }

  if (config.id && !/^[a-zA-Z0-9-_]+$/.test(config.id)) {
    errors.push('Brand ID must contain only alphanumeric characters, hyphens, and underscores');
  }

  // Valider les couleurs si présentes
  if (config.tokens.core?.primary) {
    Object.entries(config.tokens.core.primary).forEach(([shade, color]) => {
      if (color && !isValidColor(color)) {
        errors.push(`Invalid primary color for shade ${shade}: ${color}`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Note: Brand colors and properties for static brands are defined in brands.css
// This file handles both static and dynamic brand switching logic