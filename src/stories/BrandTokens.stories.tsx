import type { Meta, StoryObj } from "@storybook/react";
import { availableBrands } from "@/lib/brands";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { useEffect, useState } from "react";

// Extract CSS custom properties from DOM
const extractBrandTokens = (brandId: string) => {
  const element = document.createElement("div");
  element.className = `brand-${brandId}`;
  document.body.appendChild(element);

  const computedStyle = getComputedStyle(element);

  const tokens = {
    primary: {} as Record<string, string>,
    neutral: {} as Record<string, string>,
    success: {} as Record<string, string>,
    warning: {} as Record<string, string>,
    danger: {} as Record<string, string>,
  };

  // Extract primary colors
  for (
    let shade = 50;
    shade <= 950;
    shade += shade === 50 ? 50 : shade === 100 ? 100 : shade === 900 ? 50 : 100
  ) {
    const value = computedStyle
      .getPropertyValue(`--brand-primary-${shade}`)
      .trim();
    if (value) tokens.primary[shade] = value;
  }

  // Extract neutral colors
  [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].forEach((shade) => {
    const value = computedStyle
      .getPropertyValue(`--brand-neutral-${shade}`)
      .trim();
    if (value) tokens.neutral[shade] = value;
  });

  // Extract status colors
  ["success", "warning", "danger"].forEach((status) => {
    [50, 100, 500, 600, 700].forEach((shade) => {
      const value = computedStyle
        .getPropertyValue(`--brand-${status}-${shade}`)
        .trim();
      if (value) tokens[status as keyof typeof tokens][shade] = value;
    });
  });

  document.body.removeChild(element);
  return tokens;
};

interface ExtractedTokens {
  primary: Record<string, string>;
  neutral: Record<string, string>;
  success: Record<string, string>;
  warning: Record<string, string>;
  danger: Record<string, string>;
}

const BrandTokensShowcase = () => {
  const [brandTokens, setBrandTokens] = useState<
    Record<string, ExtractedTokens>
  >({});

  useEffect(() => {
    const tokens: Record<string, ExtractedTokens> = {};
    availableBrands.forEach((brand) => {
      tokens[brand.id] = extractBrandTokens(brand.id);
    });
    setBrandTokens(tokens);
  }, []);

  return (
    <div className="p-6 space-y-8 bg-background">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold [color:var(--text-primary)] mb-4">
          Brand Token Collections
        </h1>
        <p className="[color:var(--text-secondary)]">
          Complete token sets extracted from CSS showing primary, neutral, and
          status colors
        </p>
      </div>

      {availableBrands.map((brand) => {
        const tokens = brandTokens[brand.id];
        if (!tokens) return null;

        return (
          <div key={brand.id} className={`brand-${brand.id}`}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl capitalize">
                  {brand.name}
                </CardTitle>
                <CardDescription>{brand.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Colors */}
                <div>
                  <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-4">
                    Primary Colors
                  </h3>
                  <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
                    {Object.entries(tokens.primary).map(([shade, color]) => (
                      <div key={shade} className="text-center">
                        <div
                          className="w-full aspect-square rounded-lg border [border-color:var(--border-primary)] mb-2"
                          style={{ backgroundColor: color as string }}
                          title={`Primary ${shade}: ${color}`}
                        />
                        <div className="text-xs font-mono [color:var(--text-secondary)]">
                          {shade}
                        </div>
                        <div
                          className="text-xs font-mono [color:var(--text-tertiary)] truncate"
                          title={color as string}
                        >
                          {color as string}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neutral Colors */}
                {Object.keys(tokens.neutral).length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold [color:var(--text-primary)] mb-4">
                      Neutral Colors
                    </h3>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                      {Object.entries(tokens.neutral).map(([shade, color]) => (
                        <div key={shade} className="text-center">
                          <div
                            className="w-full aspect-square rounded-lg border [border-color:var(--border-primary)] mb-2"
                            style={{ backgroundColor: color as string }}
                            title={`Neutral ${shade}: ${color}`}
                          />
                          <div className="text-xs font-mono [color:var(--text-secondary)]">
                            {shade}
                          </div>
                          <div
                            className="text-xs font-mono [color:var(--text-tertiary)] truncate"
                            title={color as string}
                          >
                            {color as string}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Status Colors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Success */}
                  {Object.keys(tokens.success).length > 0 && (
                    <div>
                      <h4 className="font-medium [color:var(--text-primary)] mb-3">
                        Success
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(tokens.success).map(
                          ([shade, color]) => (
                            <div key={shade} className="text-center">
                              <div
                                className="w-full aspect-square rounded-md border [border-color:var(--border-primary)] mb-1"
                                style={{ backgroundColor: color as string }}
                                title={`Success ${shade}: ${color}`}
                              />
                              <div className="text-xs font-mono [color:var(--text-secondary)]">
                                {shade}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Warning */}
                  {Object.keys(tokens.warning).length > 0 && (
                    <div>
                      <h4 className="font-medium [color:var(--text-primary)] mb-3">
                        Warning
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(tokens.warning).map(
                          ([shade, color]) => (
                            <div key={shade} className="text-center">
                              <div
                                className="w-full aspect-square rounded-md border [border-color:var(--border-primary)] mb-1"
                                style={{ backgroundColor: color as string }}
                                title={`Warning ${shade}: ${color}`}
                              />
                              <div className="text-xs font-mono [color:var(--text-secondary)]">
                                {shade}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Danger */}
                  {Object.keys(tokens.danger).length > 0 && (
                    <div>
                      <h4 className="font-medium [color:var(--text-primary)] mb-3">
                        Danger
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(tokens.danger).map(([shade, color]) => (
                          <div key={shade} className="text-center">
                            <div
                              className="w-full aspect-square rounded-md border [border-color:var(--border-primary)] mb-1"
                              style={{ backgroundColor: color as string }}
                              title={`Danger ${shade}: ${color}`}
                            />
                            <div className="text-xs font-mono [color:var(--text-secondary)]">
                              {shade}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const ColorComparisonChart = () => {
  const colorTypes = [
    "primary",
    "neutral",
    "success",
    "warning",
    "danger",
  ] as const;
  const shades = ["50", "100", "500", "600", "700"] as const;
  const [brandTokens, setBrandTokens] = useState<
    Record<string, ExtractedTokens>
  >({});

  useEffect(() => {
    const tokens: Record<string, ExtractedTokens> = {};
    availableBrands.forEach((brand) => {
      tokens[brand.id] = extractBrandTokens(brand.id);
    });
    setBrandTokens(tokens);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold [color:var(--text-primary)] mb-6 text-center">
        Brand Color Comparison (CSS Extracted)
      </h1>

      {colorTypes.map((colorType) => (
        <div key={colorType} className="mb-8">
          <h2 className="text-xl font-semibold [color:var(--text-primary)] mb-4 capitalize">
            {colorType} Colors
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-2 [color:var(--text-secondary)] font-medium">
                    Shade
                  </th>
                  {availableBrands.map((brand) => (
                    <th
                      key={brand.id}
                      className="text-left p-2 [color:var(--text-secondary)] font-medium capitalize"
                    >
                      {brand.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shades.map((shade) => (
                  <tr
                    key={shade}
                    className="border-t [border-color:var(--border-primary)]"
                  >
                    <td className="p-2 font-mono text-sm [color:var(--text-primary)]">
                      {shade}
                    </td>
                    {availableBrands.map((brand) => {
                      const tokens = brandTokens[brand.id];
                      const color = tokens?.[colorType]?.[shade];

                      return (
                        <td key={`${brand.id}-${shade}`} className="p-2">
                          {color ? (
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded border [border-color:var(--border-primary)]"
                                style={{ backgroundColor: color as string }}
                                title={color as string}
                              />
                              <span className="font-mono text-xs [color:var(--text-secondary)] truncate">
                                {color as string}
                              </span>
                            </div>
                          ) : (
                            <span className="text-xs [color:var(--text-tertiary)]">
                              —
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta = {
  title: "Stride DS/Brand Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete token collections for each brand showing all available colors and properties.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllBrandTokens: Story = {
  render: () => <BrandTokensShowcase />,
  name: "Complete Token Sets",
};

export const ColorComparison: Story = {
  render: () => <ColorComparisonChart />,
  name: "Side-by-Side Comparison",
};
