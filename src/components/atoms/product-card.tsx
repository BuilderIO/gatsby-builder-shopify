/** @jsx jsx */
import React from 'react';
import { Styled, jsx } from 'theme-ui';
import Img from 'gatsby-image';
import { Card, Text } from '@theme-ui/components';
import Link from './link';
import { getPrice } from '../../utils/product';

export interface ProductCardProps {
  title?: string;
  slug?: string;
  price: number | string;
  image: any;
  currency?: string;
  imageLoading?: `auto` | `lazy` | `eager`;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  slug,
  price,
  image,
  currency,
  imageLoading = 'eager',
}) => {
  return (
    <Card
      sx={{
        maxWidth: [500, 290],
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div sx={{ flexGrow: 1 }}>
        {image && <Img loading={imageLoading} fadeIn={false} fluid={image} />}
      </div>
      <Styled.h2 sx={{ mt: 4, mb: 0, fontSize: 3 }}>{title}</Styled.h2>
      <Text sx={{ fontSize: 4, mb: 2 }}>{getPrice(String(price), currency || 'USD')}</Text>
      <Link url={`/product/${slug}/`} isButton>
        View
      </Link>
    </Card>
  );
};

export default ProductCard;
