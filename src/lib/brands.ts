// Multi-brand system for Stride Design System

export interface BrandTheme {
  id: string;
  name: string;
  description: string;
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

// Fonction pour appliquer un thème de brand
export const applyBrandTheme = (brandId: string): void => {
  const brand = getBrandById(brandId);
  if (!brand) {
    console.warn(`Brand "${brandId}" not found`);
    return;
  }

  // Supprimer les classes de brand existantes
  const existingBrands = availableBrands.map(b => `brand-${b.id}`);
  document.documentElement.classList.remove(...existingBrands);
  
  // Appliquer la nouvelle classe de brand
  document.documentElement.classList.add(`brand-${brand.id}`);
  
  // Stocker le choix dans localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('stride-brand', brandId);
  }
};

// Fonction pour récupérer le brand actuel
export const getCurrentBrand = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('stride-brand') || strideBrand.id;
  }
  return strideBrand.id;
};

// Fonction pour initialiser le brand au chargement
export const initializeBrand = (): void => {
  const savedBrand = getCurrentBrand();
  applyBrandTheme(savedBrand);
};

// Note: Brand colors and properties are now defined exclusively in brands.css
// This file only handles brand switching logic