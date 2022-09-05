import {Head} from './Head';

export default {component: Head};

export const Basic = (args) => <Head title={args.title} />;

Basic.args = {
  title: 'Some title',
};
