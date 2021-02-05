import { Builder, builder } from '@builder.io/react';
import loadable from '@loadable/component';

builder.init(process.env.GATSBY_BUILDER_API_KEY!);

const LazyHeader = loadable(() => import('./header'));

Builder.registerComponent(LazyHeader, {
  name: 'Header',
  description: 'used on top of the page, included in SSR and affects SEO',
  inputs: [
    {
      name: 'siteTitle',
      type: 'text',
      defaultValue: 'Builder.io Swag Store',
    },
  ],
});
