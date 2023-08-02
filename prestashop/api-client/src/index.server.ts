import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { ApiClientExtension, apiClientFactory } from '@vue-storefront/middleware';
import { defaultConfig, MiddlewareConfig } from './index';
import * as apiEndpoints from './api';
import { cookieParser } from './helpers/cookieParser';

const buildConfig = (settings: MiddlewareConfig) =>
  ({
    ...defaultConfig,
    ...settings,
    state: settings.state || defaultConfig.state,
  } as unknown as MiddlewareConfig);

const onCreate = (
  settings: MiddlewareConfig,
  headers?: Record<string, string>
) => {
  const config = buildConfig(settings);

  console.log('[🏋🏻] creating prestashop api client', [
    config.state.getPsCookieKey(),
    config.state.getPsCookieValue(),
    config.state.getCurrency(),
    config.state.getLocale(),
  ]);

  const client = axios.create({
    withCredentials: true,
    baseURL: config.api.url + '/' + config.state.getLocale(),
    params: {
      iso_currency: config.state.getCurrency(),
    },
    headers: {
      Cookie: config.state.getPsCookieKey() + '=' + config.state.getPsCookieValue(),
    },
  });

  client.interceptors.response.use((res: AxiosResponse) => {
    if (res.headers['set-cookie']) {
      const cookieObject = cookieParser(res.headers);
      config.state.setPsCookieKey(cookieObject.vsfPsKeyCookie);
      config.state.setPsCookieValue(cookieObject.vsfPsValCookie);
    }

    return res;
  });

  return {
    config,
    client,
  };
};

const tokenExtension: ApiClientExtension = {
  name: 'tokenExtension',
  hooks: (req: Request, res: Response) => ({
    beforeCreate: ({
      configuration,
    }: {
      configuration: MiddlewareConfig;
    }): MiddlewareConfig => {
      const psCookieKey: string =
        configuration.cookies?.psCookieKey || defaultConfig.cookies.psCookieKey;
      const psCookieValue: string =
        configuration.cookies?.psCookieValue ||
        defaultConfig.cookies.psCookieValue;
      const currencyCookieName: string =
        configuration.cookies?.currencyCookieName ||
        defaultConfig.cookies.currencyCookieName;
      const localeCookieName: string =
        configuration.cookies?.localeCookieName ||
        defaultConfig.cookies.localeCookieName;

      return {
        ...configuration,
        state: {
          getPsCookieKey: () => JSON.parse(req.cookies[psCookieKey] ?? 'null'),
          setPsCookieKey: (id) => {
            if (!id) {
              delete req.cookies[psCookieKey];
              return;
            }
            res.cookie(psCookieKey, JSON.stringify(id));
          },
          getPsCookieValue: () =>
            JSON.parse(req.cookies[psCookieValue] ?? 'null'),
          setPsCookieValue: (id) => {
            if (!id) {
              delete req.cookies[psCookieValue];
              return;
            }
            res.cookie(psCookieValue, JSON.stringify(id));
          },
          getCurrency: () =>
            JSON.parse(req.cookies[currencyCookieName] ?? 'null') ?? 'EUR',
          setCurrency: (id) => {
            if (!id) {
              delete req.cookies[currencyCookieName];
              return;
            }
            res.cookie(currencyCookieName, JSON.stringify(id));
          },
          getLocale: () =>
            JSON.parse(req.cookies[localeCookieName] ?? 'null') ?? 'en',
          setLocale: (id) => {
            if (!id) {
              delete req.cookies[localeCookieName];
              return;
            }
            res.cookie(localeCookieName, JSON.stringify(id));
          },
        },
      };
    },
  }),
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: apiEndpoints,
  extensions: [tokenExtension],
});

export { createApiClient };
