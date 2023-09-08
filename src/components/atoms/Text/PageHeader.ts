import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const PageHeader = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 28px;
  font-weight: ${({ $bold }) => ($bold ? '800' : '600')};
  line-height: 32px;
  letter-spacing: -0.56px;
  ${getTextColor};
`;
PageHeader.displayName = 'PageHeader';
