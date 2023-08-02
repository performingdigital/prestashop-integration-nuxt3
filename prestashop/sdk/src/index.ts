import { prestashopConnector } from './connector';
import type { Options } from './types';
import type { Module } from '@vue-storefront/sdk';

/**
 * Boulerplate module type.
 */
export interface PrestashopModuleType extends Module {
  /**
   * The connector of the Prestashop module.
   */
  connector: ReturnType<typeof prestashopConnector>;
}

/**
 * Prestashop module.
 */
export const prestashopModule = (options: Options): PrestashopModuleType => ({
  connector: prestashopConnector({
    apiUrl: options.apiUrl,
  }),
  utils: {},
  subscribers: {},
});

export { client } from './client';

export * from './types';
