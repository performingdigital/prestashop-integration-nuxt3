import { client } from '../../client';

import { TODO as OrderRequest, TODO as OrderResponse } from '@vue-storefront/prestashop-types';

export async function makeOrder(props: OrderRequest) {
  const { data } = await client.post<OrderResponse>('makeOrder', props);

  return data.psdata;
}
