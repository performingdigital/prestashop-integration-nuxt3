import { Context } from '../../types';

import {
  TODO as OrderRequest,
  TODO as OrderResponse,
} from '@vue-storefront/prestashop-types';

export default async function makeOrder(
  context: Context,
  params: OrderRequest
): Promise<OrderResponse> {
  const { data } = await context.client.get<OrderResponse>(
    `/rest/${params.methodName}`,
    {
      params,
    }
  );

  return data;
}
