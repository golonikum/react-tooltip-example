import { styled } from 'styled-components';

import { CommonFontStyles, getTextColor } from './constants';
import type { TextComponentProps } from './types';

export const Title = styled.div<TextComponentProps>`
  ${CommonFontStyles}
  font-size: 12px;
  font-weight: ${({ $bold }) => ($bold ? '800' : '600')};
  line-height: 16px;
  ${getTextColor};
`;
Title.displayName = 'Title';
