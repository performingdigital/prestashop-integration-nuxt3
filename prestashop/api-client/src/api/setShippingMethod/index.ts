import { Context, PrestashopResponse } from '../../types';

export type UpdateCarrierCheckoutRequest = {
  id_address: number | string;
  id_carrier: number | string;
};

export type UpdateCarrierCheckoutResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function setShippingMethod(context: Context, params: UpdateCarrierCheckoutRequest) {
  const { data } = await context.client.post<UpdateCarrierCheckoutResponse>('/rest/setcarriercheckout', {
    params,
  });

  return data;
}
