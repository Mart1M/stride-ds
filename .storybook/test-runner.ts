import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y, getViolations, configureAxe } from 'axe-playwright';

const config: TestRunnerConfig = {
  setup() {
    // Configuration globale des tests
  },
  async preVisit(page) {
    // Injecter axe-core dans chaque page
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Configuration d'axe pour les tests d'accessibilité
    await configureAxe(page, {
      rules: [
        // Activer les règles WCAG 2.1 AA
        { id: 'color-contrast', enabled: true },
        { id: 'button-name', enabled: true },
        { id: 'link-name', enabled: true },
        { id: 'aria-allowed-attr', enabled: true },
        { id: 'aria-required-attr', enabled: true },
        { id: 'focus-order-semantics', enabled: true },
        { id: 'keyboard-navigation', enabled: true },
      ],
    });

    // Exécuter les tests d'accessibilité
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });

    // Obtenir et logger les violations
    const violations = await getViolations(page);
    if (violations.length > 0) {
      console.log('\n=== Violations d\'accessibilité détectées ===');
      violations.forEach((violation, index) => {
        console.log(`\n${index + 1}. ${violation.id}: ${violation.description}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Help: ${violation.help}`);
        console.log(`   URL: ${violation.helpUrl}`);
        
        violation.nodes.forEach((node, nodeIndex) => {
          console.log(`   Élément ${nodeIndex + 1}: ${node.target.join(', ')}`);
          if (node.failureSummary) {
            console.log(`   Problème: ${node.failureSummary}`);
          }
        });
      });
      console.log('===========================================\n');
    }
  },
  tags: {
    include: ['test'],
    exclude: ['docs'],
    skip: ['skip-test'],
  },
};

export default config;
