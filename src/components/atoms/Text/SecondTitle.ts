import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const SecondTitle = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 10px;
  font-weight: ${({ $bold }) => ($bold ? '800' : '600')};
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  ${getTextColor};
`;
SecondTitle.displayName = 'SecondTitle';
