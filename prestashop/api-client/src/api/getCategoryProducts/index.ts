import { Context, PrestashopResponse } from '../../types';

export type CategoryRequest = {
  id_category: number;
  categorySlug: string;
  page: number;
  with_all_images: boolean;
  with_category_tree: boolean;
  image_size?: 'home_default';
};

export type CategoryResponse = PrestashopResponse<{
  // TODO: add types
}>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getCategoryProducts(context: Context, params: CategoryRequest) {
  const { data } = await context.client.get<CategoryResponse>('/rest/categoryProducts', {
    params: {
      id_category: params.id_category,
      categorySlug: params.categorySlug,
      page: params.page,
      with_all_images: params.with_all_images ? '1' : '0',
      with_category_tree: params.with_category_tree ? '1' : '0',
      image_size: params.image_size ?? 'home_default',
    },
  });

  return data;
}
