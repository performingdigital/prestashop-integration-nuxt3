import { Context, PrestashopResponse } from '../../types';

export type SearchRequest = {
  s: string;
  resultsPerPage: number;
};

export type SearchResponse = PrestashopResponse<{
  products: any[];
}>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function productSearch(context: Context, params: SearchRequest) {
  const { data } = await context.client.get<SearchResponse>('/rest/productSearch', {
    params: {
      s: params.s,
      resultsPerPage: params.resultsPerPage,
    },
  });
  return data;
}
