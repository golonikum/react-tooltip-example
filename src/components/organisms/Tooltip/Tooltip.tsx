import React, { FC, PropsWithChildren, useCallback, useRef } from 'react';

import { useTooltipContext } from '../../../contexts';

import { TooltipProps } from './types';

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({ children, overlay, showArrow }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const { showTooltip, hideTooltip } = useTooltipContext();

  const onMouseEnter = useCallback(() => {
    if (overlay) {
      showTooltip({ elementRef, overlay, showArrow });
    }
  }, [showTooltip, overlay]);

  const onMouseLeave = () => {
    hideTooltip();
  };

  return (
    <div ref={elementRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
