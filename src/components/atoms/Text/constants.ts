import { css } from 'styled-components';

import type { ThemeType } from '../../../styles/types';

import type { TextComponentProps } from './types';

export const CommonFontStyles = `
  font-family: Inter;
  font-style: normal;
`;

export const getTextColor = ({ theme, $color }: { theme: ThemeType } & TextComponentProps) =>
  $color &&
  css`
    color: ${theme.colors.type[$color]};
  `;
