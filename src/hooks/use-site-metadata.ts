import { useStaticQuery, graphql } from 'gatsby';

const siteMetadataStaticQuery = graphql`
  query metadata {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const useSiteMetadata = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(siteMetadataStaticQuery);

  return data.site?.siteMetadata;
};

export default useSiteMetadata;
