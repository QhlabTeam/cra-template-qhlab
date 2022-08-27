import {css, Global} from '@emotion/react';

import {theme} from './constants/theme';
import {isElectron} from './lib/isElectron';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/assets.css';

// override basic style
const rebase = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  button,
  a {
    color: currentColor;
    text-decoration: none;
    border: none;
    cursor: pointer;

    &:not(:disabled):hover {
      opacity: 0.8;
    }
    &:not(:disabled):active {
      opacity: 0.4;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }
`;

// global layout style
const layout = css`
  html,
  body,
  #root {
    height: 100%;
  }
`;

// global theming style
const themeing = css`
  html,
  body {
    font-size: 16px;
    font-family: PingFangSC, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    color: ${theme.colors.TEXT};
    background-color: ${theme.colors.BACKGROUND};
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

// electron only
const electron = css`
  /* 绘制顶部拖拽区域 */
  body::before {
    content: '';
    display: block;
    position: fixed;
    height: 50px;
    pointer-events: none;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 9999;
    -webkit-app-region: drag;
  }

  a {
    -webkit-user-drag: none;
  }
`;

export function GlobalStyles() {
  return <Global styles={[rebase, layout, themeing, isElectron && electron]} />;
}
