import {css} from '@emotion/react';
import {normalize} from 'polished';

// 覆写基础全局样式
export const rebase = css`
  ${normalize()}

  html {
    line-height: 1.4;
    overflow: overlay;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: PingFangSC, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

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

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.4;
    }
  }
`;
