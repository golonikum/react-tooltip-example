import React, { FC, PropsWithChildren, useCallback } from 'react';

import { useTooltipContext } from '../../../contexts';
import { useIsEllipsis } from '../../../hooks';

import { StyledLineClampContainer } from './styled';
import { LineClampContainerProps } from './types';

export const LineClampContainer: FC<PropsWithChildren<LineClampContainerProps>> = ({
  children,
  maxRowCount = 1,
  className,
}) => {
  const { ref, isEllipsis } = useIsEllipsis(children);

  const { showTooltip, hideTooltip } = useTooltipContext();

  const onMouseEnter = useCallback(() => {
    if (isEllipsis) {
      showTooltip({ elementRef: ref, overlay: children, showArrow: true });
    }
  }, [isEllipsis, children, showTooltip]);

  const onMouseLeave = () => {
    hideTooltip();
  };

  return (
    <StyledLineClampContainer
      className={`LineClampContainer ${className}`}
      ref={ref}
      $maxRowCount={maxRowCount}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledLineClampContainer>
  );
};
