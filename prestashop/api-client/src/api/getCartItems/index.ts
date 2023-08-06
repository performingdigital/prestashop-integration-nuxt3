import { Context, PrestashopResponse } from '../../types';

export type CartRequest = {
  image_size: 'medium_default'
}

export type CartResponse = PrestashopResponse<{}>

export async function getCartItems(
  context: Context,
  params: CartRequest = { image_size: 'medium_default' }
): Promise<CartResponse> {
  
  const { data } = await context.client.get<CartResponse>(`/rest/cart`, {
    params
  });

  return data;
}
