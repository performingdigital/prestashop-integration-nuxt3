import { Context, PrestashopResponse } from '../../types';

export type AddOrderRequest = {
  methodName: string;
};

export type AddOrderResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function makeOrder(context: Context, params: AddOrderRequest): Promise<AddOrderResponse> {
  const { data } = await context.client.get<AddOrderResponse>(`/rest/${params.methodName}`, {
    params,
  });

  return data;
}
