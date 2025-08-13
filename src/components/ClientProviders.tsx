"use client";

import { SSRProvider } from "react-aria";
import { BrandInitializer } from "@/components/BrandInitializer";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <SSRProvider>
      <BrandInitializer />
      {children}
    </SSRProvider>
  );
}
