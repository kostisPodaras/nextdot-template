import cookie from 'cookie';

const EXPIRED_DATE = 'expires=Thu, 18 Dec 2013 12:00:00 UTC';

export const removeCookies = () => {
  const currentCookies = cookie.parse(document.cookie);
  Object.keys(currentCookies).forEach((item) => {
    document.cookie = `${item}= ;expires = ${EXPIRED_DATE};`;
  });
};

export const removeCookie = (cookieKey) => {
  document.cookie = `${cookieKey}= ;expires = ${EXPIRED_DATE};`;
};

export const addCookie = (cookieKey, value) => {
  document.cookie = `${cookieKey}=${value}`;
};
