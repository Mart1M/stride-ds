import { type BrandTheme } from './brands';
export interface UseBrandReturn {
    currentBrand: string;
    availableBrands: BrandTheme[];
    setBrand: (brandId: string) => void;
    getCurrentBrandTheme: () => BrandTheme | undefined;
}
export declare const useBrand: () => UseBrandReturn;
export declare const useBrandTheme: () => BrandTheme | undefined;
//# sourceMappingURL=useBrand.d.ts.map