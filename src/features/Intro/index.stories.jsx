import {Intro} from '.';
import {Page} from '../../components/Page';

/** @type {import('@storybook/react').Meta} */
export default {
  component: Intro,
  parameters: {
    reactRouter: {
      routePath: '*',
    },
  },
};

export const Primary = (args) => (
  <Page
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Intro {...args} />
  </Page>
);
Primary.storyName = 'Intro';
