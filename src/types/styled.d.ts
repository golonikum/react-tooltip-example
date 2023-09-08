import type { CSSProp } from 'styled-components';

import { ThemeType } from '../styles/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
