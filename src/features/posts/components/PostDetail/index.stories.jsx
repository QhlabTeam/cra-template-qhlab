import {PostDetail} from '.';
import {db} from '../../../../mock/db';

/** @type {import('@storybook/react').Meta} */
export default {
  component: PostDetail,
};

/** @type {import('@storybook/react').Story} */
export const Basic = (args) => <PostDetail id={args.id} />;
Basic.args = {
  id: db.post.findFirst({}).id,
};
