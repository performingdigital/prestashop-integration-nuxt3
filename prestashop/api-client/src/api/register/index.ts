import { Context } from '../../types';
import { RegisterRequest, RegisterResponse } from '@vue-storefront/prestashop-types';

export default async function register(context: Context, params: RegisterRequest) {
  const { data } = await context.client.post<RegisterResponse>(`/rest/register`, {
    email: params.email,
    password: params.password,
    firstName: params.firstName,
    lastName: params.lastName,
  });

  return data;
}
