import {faker} from '@faker-js/faker';
import {factory, nullable, oneOf, primaryKey} from '@mswjs/data';
import {LiveStorage} from '@mswjs/storage';
import {nanoid} from 'nanoid';

import {CONFIG} from '../constants/config';
import {genArray} from '../utils/genArray';
import {storage} from '../utils/storage';

const dbLiveStorage = new LiveStorage(`${CONFIG.storagePrefix}msw_db`, {});

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

/** @param {keyof typeof db} model */
export function persistDb(model) {
  if (process.env.NODE_ENV === 'test') return;
  dbLiveStorage.update((prevData) => ({
    ...prevData,
    [model]: db[model].getAll(),
  }));
}

/* -------------------------- Initialize -------------------------- */
// function initializeDb() {
//   const database = dbLiveStorage.getValue();
//   Object.entries(db).forEach(([key, model]) => {
//     const dataEntries = database[key];
//     if (dataEntries) {
//       dataEntries?.forEach((entry) => {
//         model.create(entry);
//       });
//     }
//   });
// }

// initializeDb();

// Users
const users = genArray(12).map(() =>
  db.user.create({
    id: nanoid(),
    username: faker.name.fullName(),
    avatar: faker.image.avatar(),
  })
);

const persistedUser = storage.getUserInfo();
if (persistedUser) {
  const pUser = db.user.create({
    ...persistedUser,
  });
  users.unshift(pUser);
}

// Posts
// eslint-disable-next-line no-unused-vars
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
