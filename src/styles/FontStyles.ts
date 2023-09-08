import { createGlobalStyle } from 'styled-components';

import InterBoldWoff from './fonts/Inter-Bold.woff';
import InterBoldWoff2 from './fonts/Inter-Bold.woff2';
import InterExtraBoldWoff from './fonts/Inter-ExtraBold.woff';
import InterExtraBoldWoff2 from './fonts/Inter-ExtraBold.woff2';
import InterMediumWoff from './fonts/Inter-Medium.woff';
import InterMediumWoff2 from './fonts/Inter-Medium.woff2';
import InterRegularWoff from './fonts/Inter-Regular.woff';
import InterRegularWoff2 from './fonts/Inter-Regular.woff2';
import InterSemiBoldWoff from './fonts/Inter-SemiBold.woff';
import InterSemiBoldWoff2 from './fonts/Inter-SemiBold.woff2';
import NunitoExtraBoldWoff from './fonts/Nunito-ExtraBold.woff';
import NunitoExtraBoldWoff2 from './fonts/Nunito-ExtraBold.woff2';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: local('Inter Regular'), local('Inter-Regular'),
    url(${InterRegularWoff2}) format('woff2'),
    url(${InterRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter Medium'), local('Inter-Medium'),
    url(${InterMediumWoff2}) format('woff2'),
    url(${InterMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter SemiBold'), local('Inter-SemiBold'),
    url(${InterSemiBoldWoff2}) format('woff2'),
    url(${InterSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter Bold'), local('Inter-Bold'),
    url(${InterBoldWoff2}) format('woff2'),
    url(${InterBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: local('Inter ExtraBold'), local('Inter-ExtraBold'),
    url(${InterExtraBoldWoff2}) format('woff2'),
    url(${InterExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: local('Nunito ExtraBold'), local('Nunito-ExtraBold'),
    url(${NunitoExtraBoldWoff2}) format('woff2'),
    url(${NunitoExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }
`;
