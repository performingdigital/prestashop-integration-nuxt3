/**
 * Settings to be provided in the `middleware.config.js` file.
 */
export type MiddlewareConfig = typeof defaultConfig;

export const defaultConfig = {
  api: {
    url: '',
  },
  i18n: {
    fallbackLocale: 'en',
    fallbackCurrency: 'EUR',
  },
  cookies: {
    psCookieKey: 'ps-cookie-key',
    psCookieValue: 'ps-cookie-value',
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale',
    cartCookieName: 'vsf-cart',
    customerCookieName: 'vsf-customer',
    storeCookieName: 'vsf-store',
  },
  state: {
    getPsCookieKey: () => '',
    setPsCookieKey: (id?: string | null) => {},
    getPsCookieValue: () => '',
    setPsCookieValue: (id?: string | null) => {},
    getCurrency: () => '',
    setCurrency: (id?: string | null) => {},
    getLocale: () => '',
    setLocale: (id?: string | null) => {},
  },
};
