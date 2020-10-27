/** @jsx jsx */
import React from 'react';
import { Button, ThemeProvider, jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import theme from '../../gatsby-plugin-theme-ui';
import './footer/footer.builder';
import useBuilderHeader from '../../hooks/use-builder-header';
import AwareBuilderComponent from './aware-builder-component';
import './header/header.builder';
import 'normalize.css';
import useBuilderFooter from '../../hooks/use-builder-footer';
const Layout: React.FunctionComponent = ({ children }) => {
  const header = useBuilderHeader();
  const footer = useBuilderFooter();

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

export default Layout;
