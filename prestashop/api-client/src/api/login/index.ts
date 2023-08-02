import { Context } from '../../types';
import { 
  LoginResponse, 
  LoginRequest 
} from '@vue-storefront/prestashop-types';

export default async function login(
  context: Context,
  params: LoginRequest
): Promise<LoginResponse> {
  const { data } = await context.client.post<LoginResponse>('/rest/login', {
    email: params.username,
    password: params.password,
  });

  return data;
}
