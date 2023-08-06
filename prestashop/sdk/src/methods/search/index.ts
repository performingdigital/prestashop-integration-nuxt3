import { client } from '../../client';

import {
  //@ts-ignore
  SearchRequest,
  //@ts-ignore
  SearchResponse,
} from '@vue-storefront/prestashop-api';

export async function search(props: SearchRequest) {
  const { data } = await client.post<SearchResponse>('productSearch', {
    ...props
  });

  //@ts-ignore
  if (!data.success) {
    return null;
  }

  //@ts-ignore
  return data.psdata;
}
