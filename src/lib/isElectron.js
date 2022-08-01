/** 是否在electron内运行 */
export const isElectron =
  navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;
