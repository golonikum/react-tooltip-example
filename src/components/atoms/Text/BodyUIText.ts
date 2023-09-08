import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const BodyUIText = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 14px;
  font-weight: ${({ $bold }) => ($bold ? '600' : '400')};
  line-height: 16px;
  ${getTextColor};
`;
BodyUIText.displayName = 'BodyUIText';
