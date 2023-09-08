import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const BlockHeader = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 20px;
  font-weight: ${({ $bold }) => ($bold ? '800' : '600')};
  line-height: 24px;
  letter-spacing: -0.3px;
  ${getTextColor};
`;
BlockHeader.displayName = 'BlockHeader';
