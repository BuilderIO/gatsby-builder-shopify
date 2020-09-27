import React from 'react';
import { Builder } from '@builder.io/react';
import loadable from '@loadable/component';
import StateProvider, { StateProviderProps } from './state-provider';
const AllProducts: typeof import('./all-products-provider').default = loadable(
  () => import('./all-products-provider')
);

const AllProductsLazyProvider = ({ state, ...rest }: StateProviderProps) => {
  return (
    <AllProducts>
      {allProducts => <StateProvider state={{ ...state, allProducts }} {...rest} />}
    </AllProducts>
  );
};

Builder.registerComponent(AllProductsLazyProvider, {
  name: 'All Product State Provider',
  canHaveChildren: true,
  noWrap: true,
});
