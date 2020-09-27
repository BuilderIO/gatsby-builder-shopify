import { useStaticQuery, graphql } from 'gatsby';
const productStaticQuery = graphql`
  query productQuery {
    allShopifyProduct(limit: 50) {
      nodes {
        title
        handle
        images {
          originalSrc
          localFile {
            childImageSharp {
              fluid(maxWidth: 290) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

const useAllStaticProducts = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(productStaticQuery);

  return data.allShopifyProduct.nodes;
};

export default useAllStaticProducts;
