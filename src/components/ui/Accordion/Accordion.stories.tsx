import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Stride DS/Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
# 🪗 Accordion

Le composant Accordion permet d'afficher et masquer du contenu de manière pliable/dépliable. Il est construit avec React Aria Components pour une accessibilité optimale.

## Fonctionnalités

- **Accessibilité native** : Navigation clavier, ARIA attributes
- **Variants multiples** : Default, ghost, outline
- **Tailles configurables** : sm, md, lg  
- **Animations fluides** : Transitions CSS natives
- **Multi-sélection** : Support de plusieurs items ouverts simultanément
- **Personnalisable** : Possibilité de masquer les chevrons

## Utilisation

\`\`\`tsx
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "stride-ds";

<Accordion>
  <AccordionItem>
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>
      Réponse à la première question...
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline"],
      description: "Style variant de l'accordion",
    },
    size: {
      control: "select", 
      options: ["sm", "md", "lg"],
      description: "Taille de l'accordion",
    },
    allowsMultipleExpanded: {
      control: "boolean",
      description: "Permet d'ouvrir plusieurs items simultanément",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===============================================
// 📖 EXEMPLES DE BASE
// ===============================================

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
  },
  render: (args) => (
    <div className="w-[500px]">
      <Accordion {...args}>
        <AccordionItem>
          <AccordionTrigger>Qu&apos;est-ce que Stride DS ?</AccordionTrigger>
          <AccordionContent>
            Stride DS est un design system moderne et flexible, construit avec React, 
            TypeScript et Tailwind CSS. Il offre une collection de composants réutilisables
            pour accélérer le développement d&apos;applications web.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Comment l&apos;installer ?</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p>Vous pouvez installer Stride DS via npm :</p>
              <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                npm install stride-ds
              </code>
              <p>Puis importez les composants dont vous avez besoin dans votre application.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Est-ce accessible ?</AccordionTrigger>
          <AccordionContent>
            Oui ! Tous les composants Stride DS sont construits avec React Aria Components, 
            garantissant une accessibilité optimale avec support du clavier, lecteurs d&apos;écran, 
            et standards WCAG 2.1.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const MultipleExpanded: Story = {
  name: "Multi-sélection",
  args: {
    variant: "default",
    size: "md",
    allowsMultipleExpanded: true,
  },
  render: (args) => (
    <div className="w-[500px]">
      <Accordion {...args}>
        <AccordionItem>
          <AccordionTrigger>Configuration</AccordionTrigger>
          <AccordionContent>
            Configurez votre environnement de développement avec les outils recommandés.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Développement</AccordionTrigger>
          <AccordionContent>
            Développez vos composants en suivant les conventions du design system.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Déploiement</AccordionTrigger>
          <AccordionContent>
            Déployez votre application avec les meilleures pratiques.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Avec `allowsMultipleExpanded={true}`, plusieurs sections peuvent être ouvertes simultanément.",
      },
    },
  },
};

// ===============================================
// 🎨 VARIANTS
// ===============================================

export const Variants: Story = {
  render: () => (
    <div className="space-y-8 w-[500px]">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default</h3>
        <Accordion variant="default">
          <AccordionItem>
            <AccordionTrigger>Section avec background</AccordionTrigger>
            <AccordionContent>
              Le variant par défaut avec background et bordures.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Autre section</AccordionTrigger>
            <AccordionContent>
              Contenu de la deuxième section.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Ghost</h3>
        <Accordion variant="ghost">
          <AccordionItem>
            <AccordionTrigger>Section transparente</AccordionTrigger>
            <AccordionContent>
              Le variant ghost sans background ni bordures.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Autre section</AccordionTrigger>
            <AccordionContent>
              Parfait pour s&apos;intégrer dans un design minimaliste.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outline</h3>
        <Accordion variant="outline">
          <AccordionItem>
            <AccordionTrigger>Section outline</AccordionTrigger>
            <AccordionContent>
              Le variant outline avec bordures mais background transparent.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Autre section</AccordionTrigger>
            <AccordionContent>
              Idéal pour un look plus subtil.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Trois variants disponibles : `default` (avec background), `ghost` (transparent), et `outline` (bordures seulement).",
      },
    },
  },
};

export const Sizes: Story = {
  name: "Tailles",
  render: () => (
    <div className="space-y-8 w-[500px]">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small (sm)</h3>
        <Accordion size="sm">
          <AccordionItem>
            <AccordionTrigger size="sm">Petite section</AccordionTrigger>
            <AccordionContent size="sm">
              Contenu avec espacement réduit pour interfaces compactes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (md) - Default</h3>
        <Accordion size="md">
          <AccordionItem>
            <AccordionTrigger size="md">Section moyenne</AccordionTrigger>
            <AccordionContent size="md">
              Taille par défaut, parfaite pour la plupart des cas d&apos;usage.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large (lg)</h3>
        <Accordion size="lg">
          <AccordionItem>
            <AccordionTrigger size="lg">Grande section</AccordionTrigger>
            <AccordionContent size="lg">
              Espacement généreux pour interfaces aérées et titres importants.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Trois tailles disponibles : `sm`, `md` (défaut), et `lg`. Les tailles affectent l&apos;espacement interne et la taille du texte.",
      },
    },
  },
};

// ===============================================
// 🛠️ CUSTOMISATION
// ===============================================

export const WithoutChevron: Story = {
  name: "Sans chevron",
  render: () => (
    <div className="w-[500px]">
      <Accordion>
        <AccordionItem>
          <AccordionTrigger showChevron={false}>
            Section sans icône
          </AccordionTrigger>
          <AccordionContent>
            Cette section n&apos;affiche pas d&apos;icône chevron.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Section avec icône</AccordionTrigger>
          <AccordionContent>
            Cette section garde l&apos;icône par défaut.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Utilisez `showChevron={false}` pour masquer l&apos;icône chevron sur des triggers spécifiques.",
      },
    },
  },
};

export const RichContent: Story = {
  name: "Contenu riche",
  render: () => (
    <div className="w-[600px]">
      <Accordion allowsMultipleExpanded>
        <AccordionItem>
          <AccordionTrigger>📊 Données et statistiques</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                  <div className="text-2xl font-bold text-blue-600">127</div>
                  <div className="text-sm text-blue-600/70">Utilisateurs actifs</div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-green-600/70">Satisfaction</div>
                </div>
              </div>
              <p className="text-sm">
                Ces statistiques sont mises à jour en temps réel et reflètent 
                les performances actuelles de la plateforme.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>🛠️ Actions rapides</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-sm transition-colors">
                  Exporter données
                </button>
                <button className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded text-sm transition-colors">
                  Générer rapport
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Utilisez ces actions pour gérer rapidement vos données.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>📝 Documentation technique</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                <code className="text-sm">
                  import &#123; Accordion &#125; from &quot;stride-ds&quot;;<br/>
                  <br/>
                  &lt;Accordion variant=&quot;default&quot;&gt;<br/>
                  &nbsp;&nbsp;&lt;AccordionItem&gt;...&lt;/AccordionItem&gt;<br/>
                  &lt;/Accordion&gt;
                </code>
              </div>
              <p className="text-sm">
                Le composant supporte tous les props de React Aria Components
                pour une accessibilité et une flexibilité maximales.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "L&apos;accordion peut contenir n&apos;importe quel type de contenu : statistiques, boutons, code, etc.",
      },
    },
  },
};

// ===============================================
// ♿ ACCESSIBILITÉ
// ===============================================

export const AccessibilityDemo: Story = {
  name: "🔍 Test d'accessibilité", 
  render: () => (
    <div className="w-[500px] space-y-4">
      <div className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
        <strong>Test de navigation :</strong>
        <ul className="mt-2 space-y-1 text-xs">
          <li>• Tab/Shift+Tab : Navigation entre les triggers</li>
          <li>• Espace/Entrée : Ouvrir/fermer une section</li>
          <li>• Flèches : Navigation entre les triggers (optionnel)</li>
        </ul>
      </div>
      
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Section accessible 1</AccordionTrigger>
          <AccordionContent>
            Cette section est correctement annoncée par les lecteurs d&apos;écran.
            L&apos;état ouvert/fermé est communiqué via les attributs ARIA.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Section accessible 2</AccordionTrigger>
          <AccordionContent>
            Navigation clavier complète et focus visible pour tous les éléments interactifs.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionTrigger>Section accessible 3</AccordionTrigger>
          <AccordionContent>
            Contraste de couleurs conforme WCAG 2.1 et indicateurs visuels clairs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## Fonctionnalités d'accessibilité

- **Navigation clavier** : Tab, Espace, Entrée
- **ARIA attributes** : Gestion automatique des états
- **Focus management** : Indicateurs visuels clairs
- **Screen readers** : Annonces appropriées des changements d'état
- **WCAG 2.1** : Conformité aux standards d'accessibilité
        `,
      },
    },
  },
};
