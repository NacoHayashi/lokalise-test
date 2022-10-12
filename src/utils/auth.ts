import { isEmpty } from 'lodash';

export const TOKEN_KEY = 'aiopt-token';

const stringify = JSON.stringify;

const auth = {
  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearToken(tokenKey = TOKEN_KEY) {
    if (localStorage?.getItem(tokenKey)) {
      return localStorage.removeItem(tokenKey);
    }

    if (sessionStorage?.getItem(tokenKey)) {
      return sessionStorage.removeItem(tokenKey);
    }

    return null;
  },

  getToken(tokenKey = TOKEN_KEY) {
    if (localStorage?.getItem(tokenKey)) {
      return localStorage.getItem(tokenKey);
    }

    if (sessionStorage?.getItem(tokenKey)) {
      return sessionStorage?.getItem(tokenKey);
    }

    return null;
  },

  setToken(value = '', isLocalStorage: string | boolean = true, tokenKey = TOKEN_KEY) {
    if (isEmpty(value)) {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(tokenKey, stringify(value));
    }

    if (sessionStorage) {
      return sessionStorage.setItem(tokenKey, stringify(value));
    }

    return null;
  },

  updateToken(value = '') {
    const isLocalStorage = auth.getToken(TOKEN_KEY) ?? false;

    return auth.setToken(value, isLocalStorage);
  },
};

export default auth;
