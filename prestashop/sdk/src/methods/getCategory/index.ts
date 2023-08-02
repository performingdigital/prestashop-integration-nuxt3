import { client } from '../../client';
import {
  GetCategoryRequest,
  GetCategoryResponse,
} from '@vue-storefront/prestashop-types';

export async function getCategory(props: GetCategoryRequest) {
  const { data } = await client.post<GetCategoryResponse>('getCategoryProducts', {
    input: {
      ...props
    },
  });

  if (! data.success) {
    return null
  }

  return data.psdata;
}
