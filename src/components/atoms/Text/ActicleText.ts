import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const ActicleText = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 16px;
  font-weight: ${({ $bold }) => ($bold ? '500' : '400')};
  line-height: 24px;
  ${getTextColor};
`;
ActicleText.displayName = 'ActicleText';
