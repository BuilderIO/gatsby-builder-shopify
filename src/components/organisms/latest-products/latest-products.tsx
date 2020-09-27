/** @jsx jsx */
import { Box, Heading, jsx } from 'theme-ui';
import useRecentStaticProducts from '../../../hooks/use-recent-static-products';
import ProductGrid from '../../atoms/product-grid';

const LatestProducts = () => {
  const products = useRecentStaticProducts();

  return (
    <Box>
      <Heading as="h3">Latest Products</Heading>
      <ProductGrid imageLoading="lazy" products={products} />
    </Box>
  );
};

export default LatestProducts;
