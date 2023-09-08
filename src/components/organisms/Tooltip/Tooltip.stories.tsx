import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

export default {
  title: 'UI-Kit/organisms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    overlay: 'Подсказка',
    showArrow: false,
    children: <button>Кнопка</button>,
  },
} as Meta<typeof Tooltip>;

export const Main: StoryObj<typeof Tooltip> = {};
