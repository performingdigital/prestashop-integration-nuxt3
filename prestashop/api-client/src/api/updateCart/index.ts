import { Context, PrestashopResponse } from '../../types';

export type UpdateCartRequest = {
  id_product: number
  id_product_attribute: number
  qty?: number
  op?: string
}

export type UpdateCartResponse = PrestashopResponse<{
  products: any[],
  totals: any[],
  subtotals: any[],
  "products_count": number,
  "summary_string": string,
  labels: any,
  "discounts": any[],
  "minimalPurchase": number,
  "minimalPurchaseRequired": string,
  "errors": any[]
}>

export async function updateCart(
  context: Context,
  params: UpdateCartRequest
): Promise<UpdateCartResponse> {
  const { data } = await context.client.get<UpdateCartResponse>('/rest/cart', {
    params: {
      id_product: params.id_product,
      id_product_attribute: params.id_product_attribute,
      qty: params.qty || 1,
      op: params.op || 'up',
      update: '1',
      action: 'update',
      image_size: 'medium_default'
    }
  });

  return data;
}
