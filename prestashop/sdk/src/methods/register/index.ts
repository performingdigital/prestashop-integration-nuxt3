import { client } from '../../client';

import {
  RegisterRequest,
  RegisterResponse,
} from '@vue-storefront/prestashop-api';

export async function register(props: RegisterRequest) {
  return (await client.post<RegisterResponse>('register', props)).data;
}
