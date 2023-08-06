import { Context, PrestashopResponse } from '../../types';

export type ReviewRequest = {
  id_product: number | string;
  page: number | string;
};

export type ReviewResponse = PrestashopResponse<{
  // TODO: add types
}>;

export async function getReview(context: Context, params: ReviewRequest) {
  const { data } = await context.client.get<ReviewResponse>('/rest/listcomments', {
    params,
  });

  return data;
}
