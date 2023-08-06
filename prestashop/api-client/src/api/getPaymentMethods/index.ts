import { Context, PrestashopResponse } from '../../types';

export type GatewayRequest = {
  // Empty
};

export type GatewayResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function fetchOrders(
  context: Context,
  params: GatewayRequest = {}
) {
  const { data } = await context.client.get<GatewayResponse>(
    '/rest/paymentoptions'
  );

  return data;
}
