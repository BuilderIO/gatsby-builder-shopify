/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import useAllStaticProducts from '../../../hooks/use-all-products';
import ProductGrid from '../../atoms/product-grid';

const AllProducts = () => {
  const products = useAllStaticProducts();

  return (
    <Box>
      <Heading sx={{ px: 2 }} as="h3">
        All Products
      </Heading>
      <ProductGrid imageLoading="lazy" products={products.slice().reverse()} />
    </Box>
  );
};

export default AllProducts;
