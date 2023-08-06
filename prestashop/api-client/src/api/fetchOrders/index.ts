import { Context, PrestashopResponse } from '../../types';

export type OrderRequest = {
  id_order?: number | string;
};

export type OrderResponse = PrestashopResponse<{}>;

export async function fetchOrders(context: Context, params: OrderRequest) {
  const { data } = await context.client.get<OrderResponse>('/rest/orderhistory', {
    params: {
      id_order: params.id_order,
    },
  });

  return data;
}
