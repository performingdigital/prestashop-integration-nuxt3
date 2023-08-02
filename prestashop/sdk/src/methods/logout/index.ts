import { client } from '../../client';

// import {
//   LoginRequest,
//   LoginResponse,
// } from '@vue-storefront/prestashop-types';

export async function logout(props: object = {}) {
  const { data } = await client.post<any>('logout', props);

  return data;
}
