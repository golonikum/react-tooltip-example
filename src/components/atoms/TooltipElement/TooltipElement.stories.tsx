import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TooltipElement } from './TooltipElement';

export default {
  title: 'UI-Kit/atoms/TooltipElement',
  component: TooltipElement,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Текст всплывающей подсказки',
  },
} as Meta<typeof TooltipElement>;

export const Main: StoryObj<typeof TooltipElement> = {};

export const AllVariants: StoryObj<typeof TooltipElement> = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <TooltipElement {...args} arrow={undefined} />
      <TooltipElement {...args} arrow="right" />
      <TooltipElement {...args} arrow="bottom" />
      <TooltipElement {...args} arrow="left" />
      <TooltipElement {...args} arrow="top" />
    </div>
  ),
};
