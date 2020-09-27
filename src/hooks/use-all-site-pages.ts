import { useStaticQuery, graphql } from 'gatsby';

const allSitePagesQuery = graphql`
  query PagesQuery {
    allSitePage(filter: { path: { ne: "/dev-404-page/" } }) {
      nodes {
        path
        component
      }
    }
  }
`;

const useAllSitePages = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(allSitePagesQuery);

  return data.allSitePage.nodes;
};

export default useAllSitePages;
