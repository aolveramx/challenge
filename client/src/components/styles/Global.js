import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    color: #333;
    font-family: 'Quicksand';
    margin: 0;
  }

`;

export default GlobalStyles;