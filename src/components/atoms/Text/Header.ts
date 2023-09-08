import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const Header = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 16px;
  font-weight: ${({ $bold }) => ($bold ? '800' : '600')};
  line-height: 20px;
  letter-spacing: -0.24px;
  ${getTextColor};
`;
Header.displayName = 'Header';
