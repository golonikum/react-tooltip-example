import { TextColorsThemeType } from '../../../styles/types';

export type TextComponentProps = {
  $bold?: boolean;
  $color?: keyof TextColorsThemeType;
};
