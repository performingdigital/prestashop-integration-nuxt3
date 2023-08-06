import { Context, PrestashopResponse } from '../../types';

export type CarrierRequest = {
  // empty
};

export type CarrierResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function fetchOrders(context: Context, params: CarrierRequest) {
  const { data } = await context.client.get<CarrierResponse>('/rest/carriers');

  return data;
}
