import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const DisplaySmall = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 32px;
  font-weight: ${({ $bold }) => ($bold ? '700' : '500')};
  line-height: 40px;
  letter-spacing: -0.64px;
  ${getTextColor};
`;
DisplaySmall.displayName = 'DisplaySmall';
