const pre = 'api';
const auth = 'auth';

export const endpoints = {
  auth: {
    login: (api: string) => `${api}/${pre}/${auth}/login`,
  },
};
