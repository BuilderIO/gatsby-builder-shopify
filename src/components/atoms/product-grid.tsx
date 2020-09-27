/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid } from '@theme-ui/components';
import ProductCard from './product-card';

export interface ProductGridProps {
  products: Readonly<GatsbyTypes.ShopifyProduct[]>;
  imageLoading?: 'lazy' | 'eager' | 'auto';
}
const ProductGrid: React.FC<ProductGridProps> = ({ products, imageLoading }) => (
  <Grid
    sx={{
      maxWidth: [500, 650, 960],
      margin: '0 auto',
    }}
    gap={2}
    columns={[1, 2, 3]}
  >
    {products.map(product => (
      <ProductCard
        imageLoading={imageLoading}
        key={product.handle}
        slug={product.handle}
        title={product.title}
        currency={product.priceRange?.maxVariantPrice?.currencyCode}
        price={Number(product.priceRange?.maxVariantPrice?.amount)}
        image={product.images?.[0]?.localFile?.childImageSharp?.fluid}
      />
    ))}
  </Grid>
);

export default ProductGrid;
