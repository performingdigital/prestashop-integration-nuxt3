import { Context, PrestashopResponse } from '../../types';

export type UpdateAddressCheckoutRequest = {
  id_address?: number | string;
};

export type UpdateAddressCheckoutResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function setAddress(context: Context, params: UpdateAddressCheckoutRequest) {
  const { data } = await context.client.post<UpdateAddressCheckoutResponse>('/rest/setaddresscheckout', {
    id_address: params.id_address,
  });

  return data;
}
