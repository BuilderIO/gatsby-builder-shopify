/**
 * SEO component that queries for data with
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet, HelmetProps, MetaProps } from 'react-helmet';
import useSiteMetadata from '../../hooks/use-site-metadata';

export interface SEOProps extends HelmetProps {
  description?: string;
  lang?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ lang, description, image, meta = [], ...rest }) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata?.description;
  const helmetProps: HelmetProps = {
    titleTemplate: `%s | ${siteMetadata?.title}`,
    htmlAttributes: {
      lang: lang || 'en',
    },
    ...rest,
  };
  const helmetMeta: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: rest.title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    ...(image
      ? [
          {
            itemProp: 'image',
            content: image,
          },
          {
            property: 'og:image',
            content: image,
          },
          {
            name: 'twitter:image',
            content: image,
          },
        ]
      : []),
    ...meta,
  ];
  return <Helmet {...helmetProps} meta={helmetMeta} />;
};

export default SEO;
