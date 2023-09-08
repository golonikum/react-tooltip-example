import { css } from 'styled-components';

export const lineClampStyles = css<{ $maxRowCount?: number }>`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $maxRowCount = 1 }) => $maxRowCount};
  word-break: ${({ $maxRowCount = 1 }) => ($maxRowCount === 1 ? 'break-all' : 'break-word')};
`;
