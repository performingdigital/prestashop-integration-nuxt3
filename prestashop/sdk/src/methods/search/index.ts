import { client } from '../../client';

import {
  SearchRequest,
  SearchResponse,
} from '@vue-storefront/prestashop-types';

export async function search(props: SearchRequest) {
  const { data } = await client.post<SearchResponse>('productSearch', {
    query: props.query,
  });

  if (!data.success) {
    return null;
  }

  return data.psdata;
}
