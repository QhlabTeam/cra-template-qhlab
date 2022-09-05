/* eslint-disable react/jsx-filename-extension */
import {initialize, mswDecorator} from 'msw-storybook-addon';
import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {withRouter} from 'storybook-addon-react-router-v6';
import {SWRConfig} from 'swr';

import {GlobalStyles} from '../src/GlobalStyles';
import {request} from '../src/lib/request';
import {handlers} from '../src/mock/handlers';

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
  msw: {
    handlers,
  },
};

// Init msw
initialize();

export const decorators = [
  mswDecorator,
  withRouter,
  (Story) => (
    <HelmetProvider>
      <SWRConfig value={{fetcher: request.get}}>
        <Story />
        <GlobalStyles />
      </SWRConfig>
    </HelmetProvider>
  ),
];
