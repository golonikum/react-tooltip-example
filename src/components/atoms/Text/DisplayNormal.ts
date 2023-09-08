import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const DisplayNormal = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 42px;
  font-weight: ${({ $bold }) => ($bold ? '700' : '500')};
  line-height: 48px;
  letter-spacing: -1.26px;
  ${getTextColor};
`;
DisplayNormal.displayName = 'DisplayNormal';
