import { client } from '../../client';

import {
  RegisterRequest,
  RegisterResponse,
} from '@vue-storefront/prestashop-types';

export async function register(props: RegisterRequest) {
  return (await client.post<RegisterResponse>('register', props)).data;
}
