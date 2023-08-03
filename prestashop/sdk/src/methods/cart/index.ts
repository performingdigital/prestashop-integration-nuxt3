import { client } from '../../client';
import {
  TODO as CartRequest,
  TODO as CartResponse,
  UpdateCartRequest,
  UpdateCartResponse,
} from '@vue-storefront/prestashop-types';

export async function getCartItems(props: CartRequest = {}) {
  const { data } = await client.post<CartResponse>('getCartItems', props);

  if (!data.success) {
    return null;
  }

  return data;
}

export async function updateCart(
  props: UpdateCartRequest
): Promise<UpdateCartResponse> {
  const { data } = await client.post<UpdateCartResponse>('updateCart', props);

  if (!data.success) {
    return null;
  }

  return data;
}