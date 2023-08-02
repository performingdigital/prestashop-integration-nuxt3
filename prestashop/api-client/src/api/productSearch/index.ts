import { Context } from '../../types';
import { SearchRequest } from '@vue-storefront/prestashop-types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function productSearch(
  context: Context,
  params: SearchRequest
) {
  const { data } = await context.client.get('/rest/productSearch', {
    params: {
      s: params.query,
      resultsPerPage: 10,
    },
  });
  return data;
}
