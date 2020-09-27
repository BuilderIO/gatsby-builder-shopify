/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link as GatsbyLink } from 'gatsby';

export interface LinkProps {
  isButton?: boolean;
  url: string;
}

const Link: React.FC<LinkProps> = ({ isButton, url, children, ...props }) => {
  return isButton ? (
    <GatsbyLink
      {...props}
      activeClassName="active"
      to={url}
      sx={{
        py: 2,
        px: 3,
        borderRadius: 4,
        textDecoration: 'none',
        color: 'background',
        bg: 'primary',
        fontWeight: 600,
        '&:hover': {
          bg: 'secondary',
          cursor: 'pointer',
        },
        textAlign: 'center',
      }}
    >
      {children}
    </GatsbyLink>
  ) : (
    <GatsbyLink
      {...props}
      activeClassName="active"
      to={url}
      sx={{
        color: 'inherit',
        '&:hover': {
          color: 'secondary',
        },
      }}
    >
      {children}
    </GatsbyLink>
  );
};

export default Link;
