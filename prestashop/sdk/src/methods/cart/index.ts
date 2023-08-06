import { client } from '../../client';
import {
  GetCartRequest,
  GetCartResponse,
  UpdateCartRequest,
  UpdateCartResponse,
} from '@vue-storefront/prestashop-api';

export async function cartGet(props: GetCartRequest|null = null) {
  const { data } = await client.post<GetCartResponse>('getCartItems', props);

  if (!data.success) {
    return data;
  }

  return data;
}

export async function cartUpdate(props: UpdateCartRequest){
  const { data } = await client.post<UpdateCartResponse>('updateCart', props);

  if (!data.success) {
    return data;
  }

  return data;
}