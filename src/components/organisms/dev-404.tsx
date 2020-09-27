import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import useAllSitePages from '../../hooks/use-all-site-pages';

const Dev404 = () => {
  const allPages = useAllSitePages();

  return (
    <React.Fragment>
      <h2>Custom 404 page</h2>
      <p>This is a development only page</p>
      <ul>
        {allPages.map(item => (
          <li key={item.path}>
            <GatsbyLink title={item.component} to={item.path}>
              {' '}
              {item.path}{' '}
            </GatsbyLink>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Dev404;
