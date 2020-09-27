import React, { useContext, useState, useEffect } from 'react';
import { Router } from '@reach/router';
import ProductPage from '../../templates/product-page';
import PageTemplate from '../../templates/page';
import { useClientUnsafe } from 'gatsby-theme-shopify-manager/src';
import useAllSitePages from '../../hooks/use-all-site-pages';

const BuilderPreview = (_props: { path: string }) => {
  return (
    <Router>
      <ProductPagePreview path="/product/" />
      <ProductPagePreview path="/product/:productHandle" />
      <PagePreview default />
    </Router>
  );
};

const PagePreview: React.FC<{ default?: boolean }> = () => {
  return <PageTemplate />;
};

// productHandle will be passed from Routers when /product/....
const ProductPagePreview: React.FC<{ productHandle?: string; path?: string }> = ({
  productHandle,
}) => {
  const [data, setProduct] = useState<ShopifyBuy.Product | null>(null);
  const client = useClientUnsafe();
  const allPages = useAllSitePages();
  useEffect(() => {
    if (productHandle) {
      client?.product
        .fetchByHandle(productHandle!)
        .then(product => {
          if (product) {
            setProduct(product);
          }
        })
        .catch(err => console.log(err));
    } else {
      const anyProductPage = allPages.find(({ path }) => path.startsWith('/product'));
      if (anyProductPage) {
        location.href = anyProductPage.path + location.search;
      }
    }
  }, [productHandle, client, allPages]);
  return data ? <ProductPage data={{ shopifyProduct: data } as any} /> : null;
};

export default BuilderPreview;
