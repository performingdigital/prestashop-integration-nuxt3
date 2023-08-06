import { Context, PrestashopResponse } from '../../types';

export type AddReviewRequest = {
  id_product: number;
  comment_title: string;
  comment_content: string;
  criterion: object;
};

export type AddReviewResponse = PrestashopResponse<{
  // TODO: add response fields
}>;

export async function addReview(context: Context, params: AddReviewRequest) {
  const { data } = await context.client.post<AddReviewResponse>(
    '/rest/postcomment',
    { ...params }
  );

  return { data };
}
