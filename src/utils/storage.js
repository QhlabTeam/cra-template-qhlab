import {CONFIG} from '../constants/config';

export const storage = {
  getToken() {
    return JSON.parse(
      window.localStorage.getItem(`${CONFIG.storagePrefix}token`)
    );
  },
  setToken(token) {
    window.localStorage.setItem(
      `${CONFIG.storagePrefix}token`,
      JSON.stringify(token)
    );
  },
  clearToken() {
    window.localStorage.removeItem(`${CONFIG.storagePrefix}token`);
  },
  getUserInfo() {
    return JSON.parse(
      window.localStorage.getItem(`${CONFIG.storagePrefix}userInfo`)
    );
  },
  setUserInfo(UserInfo) {
    window.localStorage.setItem(
      `${CONFIG.storagePrefix}userInfo`,
      JSON.stringify(UserInfo)
    );
  },
  clearUserInfo() {
    window.localStorage.removeItem(`${CONFIG.storagePrefix}userInfo`);
  },
};
