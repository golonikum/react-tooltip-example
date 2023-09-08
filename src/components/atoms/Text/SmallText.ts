import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const SmallText = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 12px;
  font-weight: ${({ $bold }) => ($bold ? '600' : '400')};
  line-height: 14px;
  ${getTextColor};
`;
SmallText.displayName = 'SmallText';
