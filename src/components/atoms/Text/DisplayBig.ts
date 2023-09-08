import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const DisplayBig = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 64px;
  font-weight: ${({ $bold }) => ($bold ? '700' : '500')};
  line-height: 72px;
  letter-spacing: -1.92px;
  ${getTextColor};
`;
DisplayBig.displayName = 'DisplayBig';
