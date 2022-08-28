import {ENV} from '../constants/env';

export const storage = {
  getToken() {
    return JSON.parse(window.localStorage.getItem(`${ENV.storagePrefix}token`));
  },
  setToken(token) {
    window.localStorage.setItem(
      `${ENV.storagePrefix}token`,
      JSON.stringify(token)
    );
  },
  clearToken() {
    window.localStorage.removeItem(`${ENV.storagePrefix}token`);
  },
  getUserInfo() {
    return JSON.parse(
      window.localStorage.getItem(`${ENV.storagePrefix}userInfo`)
    );
  },
  setUserInfo(UserInfo) {
    window.localStorage.setItem(
      `${ENV.storagePrefix}userInfo`,
      JSON.stringify(UserInfo)
    );
  },
  clearUserInfo() {
    window.localStorage.removeItem(`${ENV.storagePrefix}userInfo`);
  },
};
