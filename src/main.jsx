import React from 'react';
import ReactDOM from 'react-dom/client';
import CssArrowGenerator from './CSSArrow';
import GlobalStyle from './Global.style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <CssArrowGenerator />
  </>
);
