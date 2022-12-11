const envs = import.meta.env;

export default {
  apiKey: envs.VITE_API_KEY,
  hash: envs.VITE_HASH,
  timeStamp: envs.VITE_TIME_STAMP,
  baseURL: envs.VITE_BASE_API_URL
};
