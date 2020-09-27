import { useStaticQuery, graphql } from 'gatsby';
const latestStaticQuery = graphql`
  query latest {
    allShopifyProduct(sort: { fields: [createdAt], order: DESC }, limit: 9) {
      nodes {
        title
        handle
        images {
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

const useRecentStaticProducts = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(latestStaticQuery);

  return data.allShopifyProduct.nodes;
};

export default useRecentStaticProducts;
