import { useStaticQuery, graphql } from 'gatsby';

const builderHeaderQuery = graphql`
  query Header {
    allBuilderModels {
      oneHeader {
        content
      }
    }
  }
`;

const useBuilderHeader = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(builderHeaderQuery);

  return data.allBuilderModels.oneHeader?.content;
};

export default useBuilderHeader;
