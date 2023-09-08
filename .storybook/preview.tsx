import React, { StrictMode } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { THEMES } from '../src/styles/themes';
import { CoreGlobalStyles } from '../src/styles/CoreGlobalStyles';
import { FontStyles } from '../src/styles/FontStyles';
import { TooltipProvider } from '../src/contexts';

const customViewports = {
  ...INITIAL_VIEWPORTS,
  themeColors: {
    name: 'For Theme Colors',
    styles: {
      width: '1128px',
      height: '1880px',
    },
  },
  typographics: {
    name: 'For Typographics',
    styles: {
      width: '1600px',
      height: '800px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/,
      },
    },
    viewport: { viewports: customViewports },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: '#FFFFFF',
        },
        {
          name: 'Dark',
          value: '#0A0A0B',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <StrictMode>
        <FontStyles />
        <TooltipProvider initialPlacement="right">{Story()}</TooltipProvider>
      </StrictMode>
    ),
    // @ts-ignore
    withThemeFromJSXProvider({
      themes: {
        Base: THEMES.base,
        BaseDark: THEMES.baseDark,
      },
      defaultTheme: 'Base',
      Provider: ThemeProvider,
      GlobalStyles: CoreGlobalStyles,
    }),
  ],
};

export default preview;
