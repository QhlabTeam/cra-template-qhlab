/* eslint-disable react/jsx-filename-extension */
import {Global} from '@emotion/react';
import React from 'react';
import {withRouter} from 'storybook-addon-react-router-v6';

import {rebase, layout} from '../src/lib/global.css';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withRouter,
  (Story) => (
    <>
      <Global styles={[rebase, layout]} />
      <Story />
    </>
  ),
];
