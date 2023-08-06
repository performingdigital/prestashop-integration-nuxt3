import { Context, PrestashopResponse } from '../../types';

export type CustomerRequest = {
  // empty
};

export type CustomerResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function fetchCustomers(context: Context, params: CustomerRequest) {
  const { data } = await context.client.get<CustomerResponse>('/rest/accountInfo');

  return data;
}
