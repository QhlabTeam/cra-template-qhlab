import {expect} from '@storybook/jest';
import {screen} from '@storybook/testing-library';

import {Page} from './Page';

/** @type {import('@storybook/csf').StoryContext} */
export default {
  component: Page,
  args: {
    as: 'main',
    style: {
      backgroundColor: 'whitesmoke',
    },
  },
};

// Default story
export const Default = (args) => (
  <Page {...args}>
    <h1>A page container</h1>
  </Page>
);
Default.storyName = 'Page';

Default.args = {
  className: 'Page',
};

Default.play = async () => {
  const h1 = screen.getByText(/a page container/i);
  await expect(h1).toBeVisible();
};
