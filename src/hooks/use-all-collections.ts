import { useStaticQuery, graphql } from 'gatsby';
const latestCollectionsQuery = graphql`
  query collectionQuery {
    allShopifyCollection(limit: 10, sort: { fields: [updatedAt], order: DESC }) {
      nodes {
        shopifyId
        title
        handle
      }
    }
  }
`;

const useLatestCollectionsQuery = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(latestCollectionsQuery);

  return data.allShopifyCollection.nodes;
};

export default useLatestCollectionsQuery;
