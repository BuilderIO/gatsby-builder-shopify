import { Builder, builder } from '@builder.io/react';
import loadable from '@loadable/component';
builder.init(process.env.GATSBY_BUILDER_API_KEY!);

const LazyAllProducts = loadable(() => import('./all-products'));

Builder.registerComponent(LazyAllProducts, {
  name: 'AllProductsGridSSR',
  description: 'Contains all products in store, will be included on the page in SSR',
});
