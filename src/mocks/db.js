/* eslint-disable no-unused-vars */
import {faker} from '@faker-js/faker';
import {factory, nullable, oneOf, primaryKey} from '@mswjs/data';
import {nanoid} from 'nanoid';

import {genArray} from '../utils/genArray';

const models = {
  post: {
    id: primaryKey(Number),
    title: nullable(String),
    body: String,
    cover: String,
    createdAt: Number,
    author: oneOf('user'),
  },
  user: {
    id: primaryKey(Number),
    username: String,
    avatar: String,
    password: String,
  },
};

export const db = factory(models);

// Users
const users = genArray(12).map(() =>
  db.user.create({
    id: nanoid(),
    username: faker.name.fullName(),
    avatar: faker.image.avatar(),
  })
);

// Posts
const posts = users.map((user) =>
  db.post.create({
    id: nanoid(),
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(5, '<br/><br/>'),
    cover: `${faker.image.city(600, 400)}?lock=${faker.random.numeric(5)}`,
    createdAt: faker.date.recent(7),
    author: user,
  })
);
