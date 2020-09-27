import React from 'react';
import { Container } from 'theme-ui';
import SEO from '../components/atoms/seo';
import { Builder } from '@builder.io/react';
import { Router } from '@reach/router';
import loadable from '@loadable/component';
import BuilderPreview from '../components/organisms/builder-preview';
import NoSSR from '../components/atoms/no-ssr';

const AsyncDev404 = loadable(() => import('../components/organisms/dev-404'));

const NotFound: React.FC = () => (
  <div>
    <SEO title="404: Not found" />
    <Container py="40px">
      <h1>Page not found :(</h1>
    </Container>
  </div>
);

const FourOhFour: React.FC = () => {
  if (Builder.isEditing || Builder.isPreviewing) {
    return (
      <Router>{(Builder.isEditing || Builder.isPreviewing) && <BuilderPreview path="/*" />}</Router>
    );
  }
  return <NoSSR>{process.env.NODE_ENV === 'development' ? <AsyncDev404 /> : <NotFound />}</NoSSR>;
};

export default FourOhFour;
