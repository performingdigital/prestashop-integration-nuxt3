import { Context, PrestashopResponse } from '../../types';

export type AddressRequest = {
  // empty
};

export type AddressResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function loadAddresses(context: Context, params: AddressRequest) {
  const { data } = await context.client.get<AddressResponse>('/rest/alladdresses');

  return data;
}
