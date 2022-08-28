import axios from 'axios';

import {env} from '../constants/env';
import {storage} from '../utils/storage';
import {history} from './history';

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  return config;
}

// Create axios instance as request
export const request = axios.create({baseURL: env.API_URL});

// Register default interceptors
request.interceptors.request.use(authRequestInterceptor);
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const {data, status} = /** @type {import('axios').AxiosResponse} */ (
      error.response
    );

    // Toast data's error message if you are using ui library.
    const message = data?.message || error.message;
    console.error(message);

    if (status === 401) {
      // 1. get url as prevUrl
      // 2. clean token
      // 3. redirect to login page if current page isn't "/login"
      // 4. redirect to prevUrl when login succeed
      const redirectLocation = history.location;
      storage.clearToken();
      storage.clearUserInfo();
      history.replace('/auth/login', redirectLocation);
    }
    return Promise.reject(error);
  }
);
