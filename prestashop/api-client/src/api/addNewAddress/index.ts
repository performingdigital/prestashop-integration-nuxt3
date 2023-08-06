import { Context, PrestashopResponse } from '../../types';

export type AddAddressRequest = {
  address: any;
};

export type AddAddressResponse = PrestashopResponse<{}>;

export async function addNewAddress(
  context: Context,
  params: AddAddressRequest
) {
  const { data } = await context.client.post<AddAddressRequest>(
    '/rest/address',
    { params }
  );

  return data;
}
