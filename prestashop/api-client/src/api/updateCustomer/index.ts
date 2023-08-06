import { Context, PrestashopResponse } from '../../types';

export type OrderRequest = {
  updatedUserData: object;
};

export type OrderResponse = PrestashopResponse<{
  //TODO: add types
}>;

export async function updateCustomer(context: Context, params: OrderRequest) {
  const { data } = await context.client.post<OrderResponse>('/rest/accountedit', {
    ...params.updatedUserData,
  });

  return data;
}
