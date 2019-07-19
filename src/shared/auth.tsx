import { getToken } from './token';

const isLoggedIn = () => {
  return !!getToken();
};

export { isLoggedIn };
