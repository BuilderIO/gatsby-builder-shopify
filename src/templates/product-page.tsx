import React from 'react';
import { graphql } from 'gatsby';
import AwareBuilderComponent from '../components/molecules/aware-builder-component';
import '../components/organisms/product-page-details/product-page-details.builder';
import '../components/organisms/latest-products/latest-products-no-ssr.builder';
import '../components/organisms/latest-products/latest-products.builder';

export interface ProductPageProps {
  data: GatsbyTypes.Query;
}

const ProductPage: React.FC<ProductPageProps> = ({
  data: { shopifyProduct, allBuilderModels },
}) => {
  const product = shopifyProduct!;
  const content = allBuilderModels?.oneProductPageTemplate?.content;
  return <AwareBuilderComponent content={content} data={{ product }} model="product-page" />;
};

export default ProductPage;

export const ProductPageQuery = graphql`
  query productPage($handle: String!) {
    allBuilderModels {
      oneProductPage(
        target: { productHandle: $handle }
        options: { cachebust: true, noTraverse: false }
      ) {
        content
      }
    }
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      description
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      descriptionHtml
      options {
        name
        values
      }
      variants {
        shopifyId
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 446) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
