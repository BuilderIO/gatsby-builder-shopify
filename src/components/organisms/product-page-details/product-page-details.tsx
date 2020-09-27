/** @jsx jsx */
import { useState, useEffect, useMemo, Fragment } from 'react';
import { Styled, jsx } from 'theme-ui';
import Img from 'gatsby-image';
import { Grid, Button, Alert, Close } from '@theme-ui/components';
import SEO from '../../atoms/seo';
import Thumbnail from '../../atoms/thumbnail';
import OptionPicker from '../../atoms/option-picker';
import {
  prepareVariantsWithOptions,
  prepareVariantsImages,
  getPrice,
} from '../../../utils/product';
import { useAddItemToCart } from 'gatsby-theme-shopify-manager/src';

export interface ProductPageDetailsProps {
  product: GatsbyTypes.ShopifyProduct;
  title: string;
  description: string;
}

const ProductPageDetails: React.FC<ProductPageDetailsProps> = ({ product, title, description }) => {
  const colors = product?.options?.find(option => option?.name?.toLowerCase() === 'color')?.values!;
  const sizes = product?.options?.find(option => option?.name?.toLowerCase() === 'size')?.values;

  const variants = useMemo(() => prepareVariantsWithOptions(product!.variants! as any), [
    product.variants,
  ]);
  const images = useMemo(() => prepareVariantsImages(variants, 'color'), [variants]);

  if (images.length < 1) {
    throw new Error('Must have at least one product image!');
  }

  const addItemToCart = useAddItemToCart();
  const [variant, setVariant] = useState(variants[0]);
  const [color, setColor] = useState(variant.color);
  const [size, setSize] = useState(variant.size);
  const [addedToCartMessage, setAddedToCartMessage] = useState<string>('');

  useEffect(() => {
    const newVariant = variants.find(variant => {
      return variant.size === size && variant.color === color;
    });

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant);
    }
  }, [size, color, variants, variant.shopifyId]);

  const gallery =
    images.length > 1 ? (
      <Grid gap={2} columns={6}>
        {images.map(({ src, color }) => (
          <Thumbnail name={color} key={color} src={src} onClick={() => setColor(color)} />
        ))}
      </Grid>
    ) : null;

  async function handleAddToCart() {
    try {
      await addItemToCart(variant.shopifyId, 1);
      setAddedToCartMessage('🛒 Added to your cart!');
    } catch (e) {
      setAddedToCartMessage('There was a problem adding this to your cart');
    }
  }

  return (
    <Fragment>
      <SEO
        title={title || product.title}
        description={product.description || 'Default Product description'}
      />
      {addedToCartMessage ? (
        <Alert sx={{ mb: 4 }} variant="primary">
          {addedToCartMessage}
          <Close
            ml="auto"
            mr={-2}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={() => setAddedToCartMessage('')}
          />
        </Alert>
      ) : null}
      <Grid gap={4} columns={[1, 2]}>
        <div>
          <div
            sx={{
              border: '1px solid gray',
              padding: 2,
              marginBottom: 2,
            }}
          >
            <Img
              fadeIn={false}
              loading="eager"
              fluid={variant.image.localFile.childImageSharp.fluid}
            />
          </div>
          {gallery}
        </div>
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <span sx={{ mt: 0, mb: 2 }}>
            <Styled.h1>{title || product.title}</Styled.h1>
            <Styled.h4 aria-label="price" sx={{ mt: 0, mb: 2 }}>
              {
                /**
                 * TODO: load this from api client side for selected variant
                 */
                getPrice(
                  product.priceRange?.maxVariantPrice?.amount!,
                  product.priceRange?.maxVariantPrice?.currencyCode!
                )
              }
            </Styled.h4>
          </span>
          <div dangerouslySetInnerHTML={{ __html: description || product.descriptionHtml! }} />
          <div>
            <Grid padding={2} columns={2}>
              {colors?.length && (
                <OptionPicker
                  key="Color"
                  name="Color"
                  options={colors}
                  selected={color}
                  onChange={event => setColor(event.target.value)}
                />
              )}
              {sizes?.length && (
                <OptionPicker
                  key="Size"
                  name="Size"
                  options={sizes}
                  selected={size}
                  onChange={event => setSize(event.target.value)}
                />
              )}
            </Grid>
          </div>
          <Button name="add-to-cart" sx={{ margin: 2, display: 'block' }} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Grid>
    </Fragment>
  );
};

export default ProductPageDetails;
