import { useStaticQuery, graphql } from 'gatsby';

const builderFooterQuery = graphql`
  query Footer {
    allBuilderModels {
      oneFooter {
        content
      }
    }
  }
`;

const useBuilderFooter = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(builderFooterQuery);

  return data.allBuilderModels.oneFooter?.content;
};

export default useBuilderFooter;
