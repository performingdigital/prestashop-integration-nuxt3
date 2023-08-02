import { Context } from '../../types';
import { GetCategoryRequest } from '@vue-storefront/prestashop-types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getCategoryProducts(
  context: Context,
  params: GetCategoryRequest
) {
  const { data } = await context.client.get('/rest/categoryProducts', {
    params: {
      id_category: params.id,
      categorySlug: params.slug,
      page: params.page,
      with_all_images: params.with_all_images ? '1' : '0',
      with_category_tree: params.with_category_tree ? '1' : '0',
      image_size: params.image_size ?? 'home_default',
    },
  });

  return data;
}
