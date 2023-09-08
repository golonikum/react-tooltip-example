import React, { forwardRef, PropsWithChildren } from 'react';
import classNames from 'classnames';

import DecorTooltipBottom from '../../../images/decor-tooltip-bottom.svg';
import DecorTooltipRight from '../../../images/decor-tooltip-right.svg';
import { Text } from '../Text';

import { StyledTooltipElement } from './styled';
import { TooltipElementProps } from './types';

export const TooltipElement = forwardRef<HTMLDivElement, PropsWithChildren<TooltipElementProps>>(
  function TooltipElement({ children, className, arrow }, ref) {
    return (
      <StyledTooltipElement className={classNames('TooltipElement', className)} $arrow={arrow}>
        <Text.SmallText ref={ref}>{children}</Text.SmallText>
        {arrow && ['right', 'left'].includes(arrow) && <DecorTooltipRight className="TooltipElement__Decor" />}
        {arrow && ['top', 'bottom'].includes(arrow) && <DecorTooltipBottom className="TooltipElement__Decor" />}
      </StyledTooltipElement>
    );
  },
);
