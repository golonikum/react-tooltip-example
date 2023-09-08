export type TooltipElementProps = {
  arrow?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
};

export type StyledTooltipElementProps = {
  $arrow: TooltipElementProps['arrow'];
};
