export const ENV = {
  apiUrl: process.env.REACT_APP_API_URL ?? '',
  enableMSW: process.env.REACT_APP_ENABLE_MSW === 'true',
  storagePrefix: process.env.REACT_APP_STORAGE_PREFIX ?? 'qhlab_',
};
