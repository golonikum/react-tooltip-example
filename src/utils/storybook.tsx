import React, { FC, PropsWithChildren } from 'react';

type ResizableContainerProps = {
  mode?: 'vertical' | 'horizontal' | 'both';
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export const ResizableContainer: FC<PropsWithChildren<ResizableContainerProps>> = ({
  mode = 'both',
  width = 850,
  height,
  children,
  style,
}) => (
  <div
    style={{
      resize: mode,
      overflow: 'auto',
      width: width ? `${width}px` : undefined,
      height: height ? `${height}px` : undefined,
      ...style,
    }}
  >
    {children}
  </div>
);

export const withResizableContainer =
  (props: ResizableContainerProps = {}) =>
  (Story: any) => (
    <ResizableContainer {...props}>
      <Story />
    </ResizableContainer>
  );
