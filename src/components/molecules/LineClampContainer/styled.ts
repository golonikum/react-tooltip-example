import { styled } from 'styled-components';

import { lineClampStyles } from '../../../styles/mixins';

export const StyledLineClampContainer = styled.div<{ $maxRowCount?: number }>`
  ${lineClampStyles}
`;
