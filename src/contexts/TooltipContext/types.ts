export type PlacementType = 'top' | 'bottom' | 'left' | 'right';

export type TooltipStyleProps = { left?: number; top?: number; visibility: 'visible' | 'hidden' };

export type GetTooltipPositionArgs = {
  element: HTMLDivElement | null;
  tooltipElement: HTMLDivElement | null;
  placement: PlacementType;
};

export type GetPositionWithoutOverflowArgs = {
  tooltipElement: HTMLDivElement | null;
  windowWidth: number;
  windowHeight: number;
  placement: PlacementType;
  position: Omit<TooltipStyleProps, 'visibility'>;
};

export type ShowTooltipArgs = {
  elementRef: React.RefObject<HTMLDivElement>;
  overlay: React.ReactNode;
  showArrow?: boolean;
};

export type TooltipContextValueType = {
  showTooltip: (args: ShowTooltipArgs) => Promise<void>;
  hideTooltip: () => void;
};
