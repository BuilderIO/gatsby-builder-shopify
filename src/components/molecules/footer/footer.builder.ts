import { Builder, builder } from '@builder.io/react';
import loadable from '@loadable/component';

builder.init(process.env.GATSBY_BUILDER_API_KEY!);

const LazyFooter = loadable(() => import('./footer'));

Builder.registerComponent(LazyFooter, {
  name: 'Footer',
  description: 'Used at the bottom of the page',
  inputs: [
    {
      name: 'footerTitle',
      type: 'text',
      defaultValue: 'Builder.io footer',
    },
  ],
});
