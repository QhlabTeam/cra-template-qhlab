import {env} from '../constants/env';

export const storage = {
  getToken() {
    return JSON.parse(
      window.localStorage.getItem(`${env.STORAGE_PREFIX}token`)
    );
  },
  setToken(token) {
    window.localStorage.setItem(
      `${env.STORAGE_PREFIX}token`,
      JSON.stringify(token)
    );
  },
  clearToken() {
    window.localStorage.removeItem(`${env.STORAGE_PREFIX}token`);
  },
  getUserInfo() {
    return JSON.parse(
      window.localStorage.getItem(`${env.STORAGE_PREFIX}userInfo`)
    );
  },
  setUserInfo(UserInfo) {
    window.localStorage.setItem(
      `${env.STORAGE_PREFIX}userInfo`,
      JSON.stringify(UserInfo)
    );
  },
  clearUserInfo() {
    window.localStorage.removeItem(`${env.STORAGE_PREFIX}userInfo`);
  },
};
