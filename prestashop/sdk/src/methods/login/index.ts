import { client } from '../../client';

import { 
  LoginRequest,
  LoginResponse
} from '@vue-storefront/prestashop-api';

export async function login(props: LoginRequest) {
  const { data } = await client.post<LoginResponse>('login', props);

  return data.psdata;
}
