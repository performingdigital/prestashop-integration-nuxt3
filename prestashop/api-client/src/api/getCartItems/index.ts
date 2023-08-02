import { Context } from '../../types';

import {
  TODO as CartRequest,
  TODO as CartResponse,
} from '@vue-storefront/prestashop-types';

export default async function getCartItems(
  context: Context,
  params: CartRequest
): Promise<CartResponse> {
  const { data } = await context.client.get<CartResponse>(`/rest/cart`, {
    params: {
      ...params,
      image_size: 'medium_default',
    },
  });

  return data;
}
