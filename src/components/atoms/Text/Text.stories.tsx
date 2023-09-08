import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import type { StoryObj } from '@storybook/react';
import { IStyledComponent } from 'styled-components';
import { Substitute } from 'styled-components/dist/types';

import { Text } from './index';
import type { TextComponentProps } from './types';

export default {
  title: 'UI-Kit/atoms/Text',
  parameters: {
    viewport: {
      defaultViewport: 'typographics',
    },
  },
};

type StoryRowProps = {
  Cmp: IStyledComponent<
    'web',
    Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TextComponentProps>
  >;
  label: string;
  text: string;
};

const StoryRow: FC<StoryRowProps> = ({ Cmp, label, text }) => (
  <tr>
    <td style={{ whiteSpace: 'nowrap' }}>{label}</td>
    <td>
      <Cmp>{text}</Cmp>
    </td>
    <td>
      <Cmp $bold>{text}</Cmp>
    </td>
  </tr>
);

const storyRows: StoryRowProps[] = [
  {
    Cmp: Text.SmallText,
    label: 'Small Text',
    text: 'Дополнительный текст',
  },
  {
    Cmp: Text.BodyUIText,
    label: 'Body UI Text',
    text: 'Основной текст в интерфейсе',
  },
  {
    Cmp: Text.BodyReadText,
    label: 'Body Read Text',
    text: 'Основной для длинных текстов',
  },
  {
    Cmp: Text.ActicleText,
    label: 'Acticle Text',
    text: 'Текст для статей',
  },
  {
    Cmp: Text.SecondTitle,
    label: 'Second Title',
    text: 'Дополнительный заголовок',
  },
  {
    Cmp: Text.Title,
    label: 'Title',
    text: 'Заголовок полей ввода',
  },
  {
    Cmp: Text.Header,
    label: 'Header',
    text: 'Заголовок',
  },
  {
    Cmp: Text.BlockHeader,
    label: 'Block Header',
    text: 'Заголовок блока',
  },
  {
    Cmp: Text.PageHeader,
    label: 'Page Header',
    text: 'Заголовок страницы',
  },
  {
    Cmp: Text.DisplaySmall,
    label: 'Display Small',
    text: 'Маленький декоративный заголовок',
  },
  {
    Cmp: Text.DisplayNormal,
    label: 'Display Normal',
    text: 'Декоративный заголовок',
  },
  {
    Cmp: Text.DisplayBig,
    label: 'Display Big',
    text: 'Большой декоративный заголовок',
  },
];

export const TextComponents: StoryObj<any> = {
  args: { text: '' },
  name: 'Типографика',
  render: ({ text }: { text: string }) => (
    <table style={{ fontFamily: 'Courier New' }} cellPadding="8px">
      <thead>
        <tr>
          <th></th>
          <th>Нормальная толщина</th>
          <th>Толстые</th>
        </tr>
      </thead>
      <tbody>
        {storyRows.map((props) => (
          <StoryRow {...props} key={props.label} text={text || props.text} />
        ))}
      </tbody>
    </table>
  ),
};
