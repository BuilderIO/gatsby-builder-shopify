/** @jsx jsx */
import React, { useMemo } from 'react';
import { Button, ThemeProvider, jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import theme from '../../gatsby-plugin-theme-ui';
import './footer/footer.builder';
import useBuilderHeader from '../../hooks/use-builder-header';
import AwareBuilderComponent from './aware-builder-component';
import './header/header.builder';
import 'normalize.css';
import useBuilderFooter from '../../hooks/use-builder-footer';
import useLatestCollectionsQuery from '../../hooks/use-all-collections';
import { Builder } from '@builder.io/react';
import { once } from 'lodash';
const Layout: React.FunctionComponent = ({ children }) => {
  const header = useBuilderHeader();
  const footer = useBuilderFooter();
  const collections = useLatestCollectionsQuery();
  registerTestComponent(collections);
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1" />
      </Helmet>
      <AwareBuilderComponent model="header" content={header} />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: 3,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <AwareBuilderComponent model="footer" content={footer} />
      </div>
    </ThemeProvider>
  );
};

const Test: React.FC<{ collectionTitle: string }> = ({ collectionTitle }) => (
  <div>title is : {collectionTitle}</div>
);

const registerTestComponent = once((collections: any) => {
  Builder.registerComponent(Test, {
    name: 'test',
    inputs: [
      {
        name: 'collectionTitle',
        type: 'string',
        enum: collections?.map((col: any) => col.title!) || [],
      },
    ],
  });
});

export default Layout;
