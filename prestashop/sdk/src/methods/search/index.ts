import { client } from '../../client';

import {
  SearchRequest,
  SearchResponse,
} from '@vue-storefront/prestashop-types';

export async function search(props: SearchRequest) {
  const { data } = await client.post<SearchResponse>('getCategoryProducts', {
    input: {
      term: props.query,
      type: 'instant-search',
    },
  });

  if (!data.success) {
    return null;
  }

  return data.psdata;
}
