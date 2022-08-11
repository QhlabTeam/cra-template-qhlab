/* eslint-disable react/jsx-filename-extension */
import {Global} from '@emotion/react';

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
  (Story) => (
    <>
      <Global styles={[rebase, layout]} />
      <Story />
    </>
  ),
];
