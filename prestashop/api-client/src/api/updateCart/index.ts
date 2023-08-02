import { Context } from '../../types';
import {
  UpdateCartResponse,
  UpdateCartRequest,
} from '@vue-storefront/prestashop-types';

export default async function updateCart(
  context: Context,
  params: UpdateCartRequest
): Promise<UpdateCartResponse> {
  const { data } = await context.client.get<UpdateCartResponse>('/rest/cart', {
    params: {
      id_product: params.id_product,
      id_product_attribute: params.id_product_attribute,
      qty: params.quantity || 1,
      op: 'up',
      update: '1',
      action: 'update',
      image_size: 'medium_default',
    },
  });

  return data;
}
