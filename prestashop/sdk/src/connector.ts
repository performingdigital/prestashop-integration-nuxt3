import { client } from './client';
import { Options } from './types';
import * as methods from './methods/index';

/**
 * Connector methods.
 */
type Methods = typeof methods;

/**
 * Initialize the Prestashop connector.
 */
export const prestashopConnector = (options: Options): Methods => {
  client.defaults.baseURL = options.apiUrl;

  return methods;
};
