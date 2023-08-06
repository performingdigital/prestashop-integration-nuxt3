import { Context, PrestashopResponse } from '../../types';

export type CountryRequest = {
  // empty
};

export type CountryResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function fetchOrders(context: Context, params: {} = {}) {
  const { data } = await context.client.get<CountryResponse>(
    '/rest/addressform'
  );

  return data;
}
