export interface BrandTheme {
    id: string;
    name: string;
    description: string;
}
export declare const strideBrand: BrandTheme;
export declare const coralBrand: BrandTheme;
export declare const forestBrand: BrandTheme;
export declare const runswapBrand: BrandTheme;
export declare const availableBrands: BrandTheme[];
export declare const getBrandById: (brandId: string) => BrandTheme | undefined;
export declare const getDefaultBrand: () => BrandTheme;
export declare const applyBrandTheme: (brandId: string) => void;
export declare const getCurrentBrand: () => string;
export declare const initializeBrand: () => void;
