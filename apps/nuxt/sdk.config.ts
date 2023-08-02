import { buildModule, initSDK } from '@vue-storefront/sdk';
import {
  prestashopModule,
  PrestashopModuleType,
} from '@vue-storefront/prestashop-sdk';

const sdkConfig = {
  prestashop: buildModule<PrestashopModuleType>(prestashopModule, {
    apiUrl: 'http://localhost:8181/prestashop',
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);
