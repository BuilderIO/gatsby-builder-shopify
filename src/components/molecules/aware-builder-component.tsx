import { Builder, builder, BuilderComponent } from '@builder.io/react';
import { BuilderPageProps } from '@builder.io/react/src/components/builder-page.component';
import '@builder.io/widgets';
import React from 'react';
import Link from '../atoms/link';
import { useCartCount, useAddItemToCart } from 'gatsby-theme-shopify-manager/src';

const apiKey = process.env.GATSBY_BUILDER_API_KEY;
builder.init(apiKey!);
Builder.isStatic = true;

const AwareBuilderComponent: React.FC<Partial<BuilderPageProps>> = props => {
  const cartCount = useCartCount();
  const addItem = useAddItemToCart();
  return (
    <BuilderComponent
      renderLink={props => {
        const internal = props.target !== '_blank' && /^\/(?!\/)/.test(props.href!);
        if (internal) {
          return <Link url={props.href!} {...props} />;
        }
        return <a {...props} />;
      }}
      context={{ cartCount, addItem }}
      {...props}
    />
  );
};

export default AwareBuilderComponent;
