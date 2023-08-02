import { Context } from '../../types';

import {
  TODO as LogoutResponse,
  TODO as LogoutRequest,
} from '@vue-storefront/prestashop-types'; 

export default async function logout(context: Context, params: LogoutRequest) {
  const { data } = await context.client.get<LogoutResponse>('/rest/logout', {
    params,
  });

  return data;
}
