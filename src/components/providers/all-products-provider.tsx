import React from 'react';
import useAllStaticProducts from '../../hooks/use-all-products';

export const AllProductsWrapper: React.FC<{
  children: (products: GatsbyTypes.ShopifyProduct[]) => React.ReactElement;
}> = ({ children }) => {
  const products = useAllStaticProducts();

  return children(products.slice()) || null;
};

export default AllProductsWrapper;
