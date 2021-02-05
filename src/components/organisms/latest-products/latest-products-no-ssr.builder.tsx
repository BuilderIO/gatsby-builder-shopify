import React from 'react';
import { Builder, builder } from '@builder.io/react';
import loadable from '@loadable/component';
import UnderTheFold from '../../atoms/under-the-fold';
builder.init(process.env.GATSBY_BUILDER_API_KEY!);

const LazyLatesProducts = loadable(() => import('./latest-products'), { ssr: false });

const UnderTheFoldProducts: React.FC = () => (
  <UnderTheFold>{() => <LazyLatesProducts />}</UnderTheFold>
);

Builder.registerComponent(UnderTheFoldProducts, {
  name: 'LatestProductsGridNoSSR',
  description:
    'Contains latest products in store, will not included on the page in SSR (for better performance)',
});
