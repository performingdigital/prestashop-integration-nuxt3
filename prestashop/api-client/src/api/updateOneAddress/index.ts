import { Context, PrestashopResponse } from '../../types';

export type OrderRequest = {
  address: object;
};

export type OrderResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function updateOneAddress(context: Context, params: OrderRequest) {
  const { data } = await context.client.post<OrderResponse>('/rest/address', {
    ...params.address,
  });

  return data;
}
