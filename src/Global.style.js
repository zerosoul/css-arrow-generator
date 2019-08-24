import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Terminal Dosis',sans-serif;
    font-weight:normal;
    line-height:1.6;
    font-size:18px;
  }
  body{
    -webkit-overflow-scrolling: touch;
    background: url(/img/bg.png);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
    color: #fff;
    overflow:scroll;
    margin:0 auto;
    min-height:100vh;
    position: relative;
  }
  #root{
    min-height:100vh;
  }

`;

export default GlobalStyle;
