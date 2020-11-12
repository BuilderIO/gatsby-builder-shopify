import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/atoms/seo';
import AwareBuilderComponent from '../components/molecules/aware-builder-component';
import '../components/organisms/all-products/all-products.builder';
import '../components/organisms/latest-products/latest-products.builder';
import '../components/organisms/latest-products/latest-products-no-ssr.builder';
import '../components/providers/all-products-provider.builder';

export interface PageProps {
  data?: GatsbyTypes.Query;
}

const defaultDescription = 'Edit this in your entry for a better SEO';
const defaultTitle = 'Builder: Drag and Drop Page Building for Any Site';

const PageTemplate: React.FC<PageProps> = ({ data, ...rest }) => {
  const builderPage = data?.allBuilderModels?.onePage?.content;
  const seo = {
    title: (builderPage && builderPage.data.title) || defaultTitle,
    description: (builderPage && builderPage.data.description) || defaultDescription,
    keywords: (builderPage && builderPage.data.keywords) || [],
    image: builderPage && builderPage.data.image,
  };

  return (
    <>
      <SEO {...seo} />
      <AwareBuilderComponent content={builderPage} model="page" />
    </>
  );
};

export default PageTemplate;

export const query = graphql`
  query onePage($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }, options: { cachebust: true, noTraverse: false }) {
        content
      }
    }
  }
`;
