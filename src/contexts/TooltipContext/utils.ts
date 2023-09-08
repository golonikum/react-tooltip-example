import { GetPositionWithoutOverflowArgs, GetTooltipPositionArgs, PlacementType } from './types';

export const getTooltipPosition = ({ element, tooltipElement, placement }: GetTooltipPositionArgs) => {
  const el = element?.getBoundingClientRect();
  const tooltip = tooltipElement?.getBoundingClientRect();
  const tooltipWidth = tooltip?.width || 0;
  const tooltipHeight = tooltip?.height || 0;
  const elementTop = el?.top || 0;
  const elementHeight = el?.height || 0;
  const elementLeft = el?.left || 0;
  const elementWidth = el?.width || 0;

  switch (placement) {
    case 'bottom':
      return {
        top: elementTop + elementHeight + window.scrollY,
        left: elementLeft + elementWidth / 2 - tooltipWidth / 2,
      };
    case 'top':
      return {
        top: elementTop - tooltipHeight + window.scrollY,
        left: elementLeft + elementWidth / 2 - tooltipWidth / 2,
      };
    case 'left':
      return {
        top: elementTop + elementHeight / 2 - tooltipHeight / 2 + window.scrollY,
        left: elementLeft - tooltipWidth,
      };
    default:
      return {
        top: elementTop + elementHeight / 2 - tooltipHeight / 2 + window.scrollY,
        left: elementLeft + elementWidth,
      };
  }
};

export const getArrowForElement = ({ showArrow, placement }: { showArrow?: boolean; placement: PlacementType }) => {
  if (!showArrow) {
    return undefined;
  }

  switch (placement) {
    case 'top':
      return 'bottom';
    case 'bottom':
      return 'top';
    case 'left':
      return 'right';
    default:
      return 'left';
  }
};

const getSizeWithoutOverflow = (top: number, height: number, windowHeight: number) => {
  if (top < 0) {
    return 0;
  } else if (top + height > windowHeight) {
    return windowHeight - height;
  }

  return top;
};

export const getPositionWithoutOverflow = ({
  tooltipElement,
  position,
  placement,
  windowWidth,
  windowHeight,
}: GetPositionWithoutOverflowArgs) => {
  const tooltip = tooltipElement?.getBoundingClientRect();
  const width = tooltip?.width || 0;
  const height = tooltip?.height || 0;
  const top = position?.top || 0;
  const left = position?.left || 0;

  switch (placement) {
    case 'right':
      return left + width < windowWidth ? { left: left, top: getSizeWithoutOverflow(top, height, windowHeight) } : null;
    case 'bottom':
      return top + height < windowHeight ? { left: getSizeWithoutOverflow(left, width, windowWidth), top: top } : null;
    case 'top':
      return top > 0 ? { left: getSizeWithoutOverflow(left, width, windowWidth), top: top } : null;
    case 'left':
      return left > 0 ? { left: left, top: getSizeWithoutOverflow(top, height, windowHeight) } : null;
  }
};
