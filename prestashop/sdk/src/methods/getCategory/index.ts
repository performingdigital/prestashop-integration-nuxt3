import { client } from '../../client';

import {
  TODO as GetCategoryRequest,
  TODO as GetCategoryResponse,
} from '@vue-storefront/prestashop-api';

export async function getCategory(props: GetCategoryRequest) {
  const { data } = await client.post<GetCategoryResponse>('getCategoryProducts', {
    ...props
  });

  if (! data.success) {
    return data
  }

  return data.psdata;
}
