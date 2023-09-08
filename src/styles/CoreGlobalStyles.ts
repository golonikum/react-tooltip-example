import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const CoreGlobalStyles = createGlobalStyle`
  ${normalize}
  
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 16px;
  }
  
  * {
    scrollbar-width: thin;
    scrollbar-color: #3392f2 transparent;
  }

  *::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #3392f2;
    border-radius: 8px;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
  }
`;
