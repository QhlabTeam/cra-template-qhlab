import axios from 'axios';

export const request = axios.create();

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (error) => {
    /** @type {import('axios').AxiosResponse} */
    const {data, status} = error.response;

    if (status === 401) {
      // 1. get url as prevUrl
      // 2. clean token
      // 3. redirect to login page if current page isn't "/login"
      // 4. redirect to prevUrl when login succeed
    }

    // Toast data's error message if you are using ui library.
    if (data.message) console.error(data.message);
    return Promise.reject(error);
  }
);
