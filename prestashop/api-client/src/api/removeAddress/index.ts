import { Context, PrestashopResponse } from '../../types';

export type RemoveAddressRequest = {
  id_address?: number | string;
};

export type RemoveAddressResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function removeAddress(context: Context, params: RemoveAddressRequest) {
  const { data } = await context.client.delete<RemoveAddressResponse>('/rest/address', {
    data: {
      id_address: params.id_address,
    },
  });

  return data;
}
