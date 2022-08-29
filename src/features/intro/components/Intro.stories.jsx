import {Page} from '../../../components/layout/Page';
import {Intro} from './Intro';

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
