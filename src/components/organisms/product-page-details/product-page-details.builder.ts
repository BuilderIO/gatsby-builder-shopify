import { Builder, builder } from '@builder.io/react';
import loadable from '@loadable/component';
builder.init(process.env.GATSBY_BUILDER_API_KEY!);

const LazyProductPageDetails = loadable(() => import('./product-page-details'));

Builder.registerComponent(LazyProductPageDetails, {
  name: 'ProductPageDetails',
  description: 'Dynamic product details, included in SSR, should only be used in product pages',
  defaults: {
    bindings: {
      'component.options.product': 'state.product',
      'component.options.title': 'state.product.title',
      'component.options.description': 'state.product.descriptionHtml',
    },
  },
  inputs: [
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
});
