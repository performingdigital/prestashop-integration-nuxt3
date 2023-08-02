import { Context } from '../../types';
import {
  BootstrapRequest,
  BootstrapResponse,
} from '@vue-storefront/prestashop-types';

export default async function bootstrap(
  context: Context,
  params: BootstrapRequest
): Promise<BootstrapResponse> {
  const { data } = await context.client.get<BootstrapResponse>(
    '/rest/bootstrap',
    { params }
  );

  return data;
}
