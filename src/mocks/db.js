import {factory, nullable, primaryKey} from '@mswjs/data';
import {nanoid} from 'nanoid';

const models = {
  post: {
    id: primaryKey(Number),
    userId: Number,
    title: nullable(String),
    body: String,
  },
};

export const db = factory(models);

// Create init data
db.post.create({
  id: nanoid(),
  userId: nanoid(),
  title: 'Lorem ipsum dolor sit.',
  body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a! Quaerat incidunt eligendi nam aspernatur veniam laudantium deleniti molestiae nisi exercitationem saepe obcaecati, ducimus, harum, officiis quas ex sit expedita!',
});
