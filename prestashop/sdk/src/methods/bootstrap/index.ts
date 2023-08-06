import { client } from '../../client';
import { MethodOptions } from '../../types';

import {
  BootstrapRequest,
  BootstrapResponse,
} from '@vue-storefront/prestashop-api';

export async function bootstrap(
  props: BootstrapRequest,
  options?: MethodOptions
) {
  const { data } = await client.post<BootstrapResponse>('bootstrap', props);

  return data;
}
