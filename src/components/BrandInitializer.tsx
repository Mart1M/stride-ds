"use client";

import { useEffect } from "react";
import { applyBrandTheme } from "@/lib/brands";

export const BrandInitializer = () => {
  useEffect(() => {
    // Appliquer le thème runswap
    applyBrandTheme("runswap");

    // Activer le mode sombre par défaut pour tester
    document.documentElement.classList.add("dark");
  }, []);

  return null; // Ce composant ne rend rien, il initialise juste les brands
};
