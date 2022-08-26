export const env = {
  API_URL: process.env.REACT_APP_API_URL ?? '',
  ENABLE_MSW: process.env.REACT_APP_ENABLE_MSW === 'true',
  STORAGE_PREFIX: process.env.REACT_APP_STORAGE_PREFIX ?? 'qhlab_',
};
