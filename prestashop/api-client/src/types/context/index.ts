import { IntegrationContext } from '@vue-storefront/middleware';
import { AxiosInstance } from 'axios';
import { MiddlewareConfig, ContextualizedEndpoints } from '../index';

/**
 * Runtime integration context, which includes API client instance, settings, and endpoints that will be passed via middleware server.
 * This interface name is starting with `Boilerplate`, but you should use your integration name in here.
 **/
export type Context = IntegrationContext<
  AxiosInstance,
  MiddlewareConfig,
  ContextualizedEndpoints
>;