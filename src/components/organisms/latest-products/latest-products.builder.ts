import { Builder, builder } from '@builder.io/react';
import loadable from '@loadable/component';
builder.init(process.env.GATSBY_BUILDER_API_KEY!);

const LazyAllProducts = loadable(() => import('./latest-products'));

Builder.registerComponent(LazyAllProducts, {
  name: 'LatestProductsGridSSR',
  description: 'Contains latest products in store, will be included on the page in SSR',
});
