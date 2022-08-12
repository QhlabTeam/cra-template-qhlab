/* eslint-disable react/jsx-filename-extension */
import {Global} from '@emotion/react';
import React from 'react';
import {withRouter} from 'storybook-addon-react-router-v6';
import {SWRConfig} from 'swr';

import {rebase, layout} from '../src/lib/global.css';
import {request} from '../src/lib/request';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': {index: -1},
  },
};

export const decorators = [
  withRouter,
  (Story) => (
    <SWRConfig value={{fetcher: request.get}}>
      <Global styles={[rebase, layout]} />
      <Story />
    </SWRConfig>
  ),
];
