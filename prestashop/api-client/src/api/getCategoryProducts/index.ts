import { Context } from '../../types';
import { SearchParams } from '@vue-storefront/prestashop-types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getCategoryProducts(
  context: Context,
  params: SearchParams
) {
  if (params.input.type && params.input.type === 'instant-search') {
    const { data } = await context.client.get('/rest/productSearch', {
      params: {
        iso_currency: context.config.state.getCurrency(),
        s: params.input.term,
      },
    });
    return data;
  } else {
    // const url = new URL(context.config.api.url + params.lang + '/rest/categoryProducts');
    // url.searchParams.set('iso_currency', params.currency);
    // const facetsUrl = facetParams(params.input.filters);

    // url.searchParams.set('slug', params.input.categorySlug);
    // url.searchParams.set('q', facetsUrl);
    // url.searchParams.set('page', params.input.page);
    // url.searchParams.set('with_all_images', '0');
    // url.searchParams.set('with_category_tree', '1');

    const { data } = await context.client.get('/rest/categoryProducts', {
      params: {
        //@ts-ignore
        slug: params.input.categorySlug,
        iso_currency: context.config.state.getCurrency(),
        //@ts-ignore
        page: params.input.page,
        with_all_images: '0',
        with_category_tree: '1',
      },
    });

    return data.psdata;
  }
}
