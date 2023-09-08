// @ts-nocheck
import React from 'react';
import type { StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import type { ColorsThemeType } from './types';

export default {
  title: 'Themes/Colors',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'themeColors',
    },
  },
};

const StyledColorBlock = styled.div<{ blockWidth?: number; background: string }>`
  width: ${({ blockWidth }) => blockWidth ?? 120}px;
  height: 70px;
  border-radius: 4px;
  box-shadow:
    0px 2px 4px -2px rgba(16, 24, 40, 0.06),
    0px 4px 8px -2px rgba(16, 24, 40, 0.1);
  border: 1px solid var(--outline-outline-negative-body, rgba(152, 211, 251, 0.21));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({ background }) => background};
`;

type complexColorProps =
  | 'type'
  | 'typeNegative'
  | 'icons'
  | 'iconsNegative'
  | 'outline'
  | 'outlineNegative'
  | 'background'
  | 'backgroundGradient';

const StyledColor = styled.div<{
  color: string;
  colorProp?: complexColorProps;
}>`
  background: ${({ theme, color, colorProp }) => (colorProp ? theme.colors[colorProp][color] : theme.colors[color])};
  flex: 1;
`;

const StyledLabel = styled.div`
  padding: 8px;
  color: rgba(2, 9, 18, 0.9);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.3px;
  background: #fff;
`;

const StyledTitle = styled.div`
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.primary350};
`;

const ColorBlock = ({
  color,
  label,
  blockWidth,
  colorProp,
}: {
  color: keyof ColorsThemeType;
  label: string;
  blockWidth?: number;
  colorProp?: complexColorProps;
}) => (
  <StyledColorBlock blockWidth={blockWidth} background={colorProp?.includes('Negative') ? '#001833' : '#FFF'}>
    <StyledColor color={color} colorProp={colorProp} />
    <StyledLabel>{label}</StyledLabel>
  </StyledColorBlock>
);

const ColorBlocks = ({
  title,
  colors,
  blockWidth,
  colorProp,
}: {
  title: string;
  colors: Record<string, string>;
  blockWidth?: number;
  colorProp?: complexColorProps;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
    <StyledTitle>{title}</StyledTitle>
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
      {Object.keys(colors).map((colorKey) => (
        <ColorBlock
          color={colorKey as keyof ColorsThemeType}
          colorProp={colorProp}
          label={colors[colorKey]}
          blockWidth={blockWidth}
        />
      ))}
    </div>
  </div>
);

export const Colors: StoryObj<any> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px' }}>
      <ColorBlocks
        title="Primary"
        colors={{
          primary100: '100',
          primary200: '200',
          primary300: '300',
          primary350: '350',
          primary400: '400',
          primary500: '500',
          primary700: '700',
        }}
      />
      <ColorBlocks
        title="Secondary"
        colors={{
          secondary100: '100',
          secondary200: '200',
          secondary300: '300',
          secondary350: '350',
          secondary400: '400',
          secondary500: '500',
          secondary700: '700',
        }}
      />
      <ColorBlocks
        title="Type"
        colorProp="type"
        colors={{
          primary: 'Primary',
          secondary: 'Secondary',
          disable: 'Disable',
          interaction: 'Interaction',
          interactionDark: 'InteractionDark',
          hover: 'Hover',
        }}
      />
      <ColorBlocks
        title="Type negative"
        colorProp="typeNegative"
        colors={{
          primary: 'Primary',
          secondary: 'Secondary',
          disable: 'Disable',
          interaction: 'Interaction',
          interactionDark: 'InteractionDark',
          hover: 'Hover',
        }}
      />
      <ColorBlocks
        title="Icons"
        colorProp="icons"
        colors={{
          primary: 'Primary',
          secondary: 'Secondary',
          disable: 'Disable',
          interaction: 'Interaction',
          hover: 'Hover',
        }}
      />
      <ColorBlocks
        title="Icons negative"
        colorProp="iconsNegative"
        colors={{
          primary: 'Primary',
          secondary: 'Secondary',
          disable: 'Disable',
          interaction: 'Interaction',
          hover: 'Hover',
        }}
      />
      <ColorBlocks
        title="Outline"
        colorProp="outline"
        colors={{
          active: 'Active',
          input: 'Input',
          body: 'Body',
          hover: 'Hover',
          disable: 'Disable',
        }}
      />
      <ColorBlocks
        title="Outline negative"
        colorProp="outlineNegative"
        colors={{
          active: 'Active',
          input: 'Input',
          body: 'Body',
          hover: 'Hover',
          disable: 'Disable',
        }}
      />
      <ColorBlocks
        title="Grays"
        colors={{
          grays50: '50',
          grays100: '100',
          grays200: '200',
          grays300: '300',
          grays400: '400',
          grays500: '500',
          grays600: '600',
          grays700: '700',
        }}
      />
      <ColorBlocks
        title="Warning"
        colors={{
          warning100: '100',
          warning200: '200',
          warning300: '300',
          warning400: '400',
          warning500: '500',
        }}
      />
      <ColorBlocks
        title="Success"
        colors={{
          success100: '100',
          success200: '200',
          success300: '300',
          success400: '400',
          success500: '500',
        }}
      />
      <ColorBlocks
        title="Error"
        colors={{
          error100: '100',
          error200: '200',
          error300: '300',
          error400: '400',
          error500: '500',
        }}
      />
      <ColorBlocks
        title="Background"
        colorProp="background"
        colors={{
          white: 'White',
          black: 'Black',
          page: 'Page',
          inputOverlay: 'InputOverlay',
          selectorOverlay: 'SelectorOverlay',
          disableOverlay: 'DisableOverlay',
          selectedOverlay: 'SelectedOverlay',
          shadowOverlay05: 'ShadowOverlay 05',
        }}
      />
      <ColorBlocks
        title="Background gradient"
        colorProp="backgroundGradient"
        colors={{
          buttonPrimary: 'ButtonPrimaryBG',
          buttonSecondary: 'ButtonSecondaryBG',
          success: 'SuccessBG',
          warning: 'WarningBG',
          mainGradient: 'MainGradientBG',
          blockLight1: 'BlockLight-1BG',
          blockLight2: 'BlockLight-2BG',
        }}
        blockWidth={170}
      />
    </div>
  ),
};
