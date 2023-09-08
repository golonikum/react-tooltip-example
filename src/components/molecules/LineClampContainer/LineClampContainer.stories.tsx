import React, { PropsWithChildren } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LineClampContainer } from './LineClampContainer';
import { Text } from '../../atoms';
import { LineClampContainerProps } from './types';

export default {
  title: 'Custom/molecules/LineClampContainer',
  parameters: {
    layout: 'fullscreen',
  },
  component: LineClampContainer,
  args: {
    maxRowCount: 3,
    children:
      'Some very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text',
  },
} as Meta<typeof LineClampContainer>;

const Box = ({
  top,
  left,
  right,
  bottom,
  width = '100px',
  height = '48px',
  ...props
}: PropsWithChildren<LineClampContainerProps> & {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
}) => (
  <div style={{ width, height, position: 'absolute', top, left, right, bottom }}>
    <Text.BodyUIText>
      <LineClampContainer {...props} />
    </Text.BodyUIText>
  </div>
);

export const Main: StoryObj<typeof LineClampContainer> = {
  render: (args) => (
    <>
      <Box {...args} top="8px" left="8px" />
      <Box {...args} bottom="8px" right="8px" />
      <Box {...args} bottom="8px" left="8px" />
      <Box {...args} top="8px" right="8px" />
      <Box {...args} top="50%" right="8px" />
      <Box {...args} top="50%" left="8px" />
      <Box {...args} top="8px" left="50%" />
      <Box {...args} bottom="8px" left="50%" />
      <Box {...args} top="50%" left="50%" />
    </>
  ),
};

export const Rows: StoryObj<typeof LineClampContainer> = {
  render: (args) => (
    <>
      <Box {...args} top="8px" height="16px" width="100%" maxRowCount={1} />
      <Box {...args} bottom="8px" height="16px" width="100%" maxRowCount={1} />
    </>
  ),
};
