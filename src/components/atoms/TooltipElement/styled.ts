import styled from 'styled-components';

import { TOOLTIP_ARROW_HEIGHT, TOOLTIP_ARROW_WIDTH, TOOLTIP_MAX_WIDTH, TOOLTIP_MIN_WIDTH } from './constants';

import { StyledTooltipElementProps } from './types';

const getFlexDirection = ({ $arrow }: StyledTooltipElementProps) => {
  switch ($arrow) {
    case 'bottom':
      return 'column';
    case 'left':
      return 'row-reverse';
    case 'top':
      return 'column-reverse';
    default:
      return 'row';
  }
};

const getIconRotate = ({ $arrow }: StyledTooltipElementProps) => ($arrow && ['top', 'left'].includes($arrow) ? 180 : 0);

const getArrowWidth = ({ $arrow }: StyledTooltipElementProps) =>
  $arrow && ['right', 'left'].includes($arrow) ? `${TOOLTIP_ARROW_WIDTH}px` : `${TOOLTIP_ARROW_HEIGHT}px`;

const getArrowHeight = ({ $arrow }: StyledTooltipElementProps) =>
  $arrow && ['right', 'left'].includes($arrow) ? `${TOOLTIP_ARROW_HEIGHT}px` : `${TOOLTIP_ARROW_WIDTH}px`;

export const StyledTooltipElement = styled.div<StyledTooltipElementProps>`
  outline: none;
  display: flex;
  flex-direction: ${getFlexDirection};
  position: relative;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;

  margin: ${({ theme }) => theme.sizes.xs4};

  div {
    text-align: center;
    flex: 1;
    box-sizing: border-box;
    min-width: ${TOOLTIP_MIN_WIDTH}px;
    max-width: ${TOOLTIP_MAX_WIDTH}px;
    padding: ${({ theme }) => `${theme.sizes.xs4} ${theme.sizes.m16}`};
    border-radius: ${({ theme }) => theme.sizes.xs4};
    background: ${({ theme }) => theme.colors.grays700};
    color: ${({ theme }) => theme.colors.typeNegative.primary};
  }

  svg {
    width: ${getArrowWidth};
    height: ${getArrowHeight};
    transform: rotate(${getIconRotate}deg);
  }
`;
