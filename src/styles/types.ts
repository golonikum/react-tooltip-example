export type ThemeNamesType = 'base' | 'baseDark';

export type ThemeType = {
  colors: ColorsThemeType;
  boxShadows: BoxShadowsThemeType;
  radiuses: RadiusesThemeType;
  sizes: SizesThemeType;
};

export type ColorsThemeType = {
  type: TextColorsThemeType;
  typeNegative: TextColorsThemeType;
  icons: IconColorsThemeType;
  iconsNegative: IconColorsThemeType;
  outline: OutlineColorsThemeType;
  outlineNegative: OutlineColorsThemeType;
  background: BackgroundColorsThemeType;
  backgroundGradient: BackgroundGradientColorsThemeType;
  primary100: string;
  primary200: string;
  primary300: string;
  primary350: string;
  primary400: string;
  primary500: string;
  primary700: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary350: string;
  secondary400: string;
  secondary500: string;
  secondary700: string;
  grays50: string;
  grays100: string;
  grays200: string;
  grays300: string;
  grays400: string;
  grays500: string;
  grays600: string;
  grays700: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success500: string;
  error100: string;
  error200: string;
  error300: string;
  error400: string;
  error500: string;
};

type BoxShadowsThemeType = {
  activeElement: string;
  successLight: string;
  warningLight: string;
  errorLight: string;
  selectLight: string;
  switchShadow: string;
  depth2: string;
  depth4: string;
  depth8: string;
  depth64: string;
};

type RadiusesThemeType = {
  xl2: string;
  s4: string;
  m8: string;
  l12: string;
  xl16: string;
};

type SizesThemeType = {
  xss2: string;
  xs4: string;
  s8: string;
  ms12: string;
  m16: string;
  ls20: string;
  l24: string;
  xl32: string;
  xxl40: string;
  xxl48: string;
  xxl56: string;
  xxl64: string;
};

export type TextColorsThemeType = {
  primary: string;
  secondary: string;
  disable: string;
  interaction: string;
  interactionDark: string;
  hover: string;
};

type IconColorsThemeType = {
  primary: string;
  secondary: string;
  disable: string;
  interaction: string;
  hover: string;
};

type OutlineColorsThemeType = {
  active: string;
  input: string;
  body: string;
  hover: string;
  disable: string;
};

type BackgroundColorsThemeType = {
  white: string;
  black: string;
  page: string;
  inputOverlay: string;
  selectorOverlay: string;
  disableOverlay: string;
  selectedOverlay: string;
  shadowOverlay05: string;
};

type BackgroundGradientColorsThemeType = {
  buttonPrimary: string;
  buttonSecondary: string;
  success: string;
  warning: string;
  mainGradient: string;
  blockLight1: string;
  blockLight2: string;
};

export type TypeWithTheme<T = {}> = T & { theme: ThemeType };
