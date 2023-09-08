import React, { createContext, PropsWithChildren, useCallback, useContext, useRef } from 'react';
import ReactDOM from 'react-dom';

import { TooltipElement } from '../../components';
import { useWindowSize } from '../../hooks';

import { getArrowForElement, getPositionWithoutOverflow, getTooltipPosition } from './utils';

import { StyledTooltipWrap } from './styled';
import { PlacementType, ShowTooltipArgs, TooltipContextValueType, TooltipStyleProps } from './types';

const TooltipContext = createContext<TooltipContextValueType>({
  showTooltip: async () => {},
  hideTooltip: () => {},
});

export const useTooltipContext = () => useContext(TooltipContext);

export const TooltipProvider = ({
  children,
  initialPlacement = 'right',
  delay = 300,
}: PropsWithChildren<{
  initialPlacement?: PlacementType;
  delay?: number;
}>) => {
  const tooltipRefs = {
    withoutArrow: useRef<HTMLDivElement>(null),
    left: useRef<HTMLDivElement>(null),
    right: useRef<HTMLDivElement>(null),
    top: useRef<HTMLDivElement>(null),
    bottom: useRef<HTMLDivElement>(null),
  };
  const tooltipTextRefs = {
    withoutArrow: useRef<HTMLDivElement>(null),
    left: useRef<HTMLDivElement>(null),
    right: useRef<HTMLDivElement>(null),
    top: useRef<HTMLDivElement>(null),
    bottom: useRef<HTMLDivElement>(null),
  };
  const timeoutRef = useRef<number>();
  const showArrowRef = useRef(false);
  const placementRef = useRef<PlacementType>(initialPlacement);
  const [windowWidth, windowHeight] = useWindowSize();

  const getMapKey = (placement?: PlacementType) =>
    showArrowRef.current ? placement || placementRef.current : 'withoutArrow';

  const getTooltipNode = (placement?: PlacementType) => tooltipRefs[getMapKey(placement)].current;

  const getTooltipTextNode = (placement?: PlacementType) => tooltipTextRefs[getMapKey(placement)].current;

  const setPosition = ({ visibility, left, top }: TooltipStyleProps) => {
    const style = getTooltipNode()?.style;
    style?.setProperty('left', `${left}px`);
    style?.setProperty('top', `${top}px`);
    style?.setProperty('visibility', visibility);
  };

  const clearPosition = ({
    elementRef,
    placement,
  }: {
    elementRef: React.RefObject<HTMLDivElement>;
    placement: PlacementType;
  }) => {
    window.clearTimeout(timeoutRef.current);
    placementRef.current = placement;
    setPosition({
      ...getTooltipPosition({
        element: elementRef.current,
        tooltipElement: getTooltipNode(),
        placement: placementRef.current,
      }),
      visibility: 'hidden',
    });
  };

  const getRealPosition = ({
    elementRef,
    placement,
  }: {
    elementRef: React.RefObject<HTMLDivElement>;
    placement: PlacementType;
  }): Promise<Omit<TooltipStyleProps, 'visibility'>> =>
    new Promise((resolve) => {
      clearPosition({ elementRef, placement });
      timeoutRef.current = window.setTimeout(() => {
        const countedPosition = getTooltipPosition({
          element: elementRef.current,
          tooltipElement: getTooltipNode(),
          placement,
        });
        resolve(countedPosition);
      }, 50);
    });

  const showTooltip = useCallback(
    async ({ elementRef, overlay, showArrow }: ShowTooltipArgs) => {
      showArrowRef.current = !!showArrow;
      window.clearTimeout(timeoutRef.current);

      const placements: Array<PlacementType> = [
        initialPlacement,
        ...(['right', 'bottom', 'top', 'left'] as Array<PlacementType>).filter((item) => item !== initialPlacement),
      ];

      for (let i = 0; i < placements.length; i++) {
        const currentPlacement = placements[i];
        getTooltipTextNode(currentPlacement)?.replaceChildren(overlay?.toString() || '');
        const realPosition = await getRealPosition({ elementRef, placement: currentPlacement });
        const positionWithoutOverflow = getPositionWithoutOverflow({
          placement: currentPlacement,
          position: realPosition,
          tooltipElement: getTooltipNode(currentPlacement),
          windowHeight,
          windowWidth,
        });

        if (positionWithoutOverflow) {
          timeoutRef.current = window.setTimeout(() => {
            setPosition({ ...positionWithoutOverflow, visibility: 'visible' });
          }, delay);

          break;
        }
      }
    },
    [windowWidth, windowHeight],
  );

  const hideTooltip = () => {
    getTooltipTextNode()?.replaceChildren('');
    window.clearTimeout(timeoutRef.current);
    setPosition({ visibility: 'hidden' });
  };

  return (
    <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
      {children}
      {ReactDOM.createPortal(
        <>
          {['top', 'bottom', 'left', 'right', 'withoutArrow'].map((key: PlacementType | 'withoutArrow') => (
            <StyledTooltipWrap key={key} ref={tooltipRefs[key]}>
              <TooltipElement
                ref={tooltipTextRefs[key]}
                arrow={key !== 'withoutArrow' ? getArrowForElement({ showArrow: true, placement: key }) : undefined}
              />
            </StyledTooltipWrap>
          ))}
        </>,
        document.body,
      )}
    </TooltipContext.Provider>
  );
};
