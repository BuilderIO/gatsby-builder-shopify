/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import Link from '../../atoms/link';
import { useCartCount } from 'gatsby-theme-shopify-manager/src';

const Header: React.FC<{
  siteTitle: string;
}> = ({ siteTitle }) => {
  const count = useCartCount();
  return (
    <Styled.div as="header">
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          py: [2, 3],
          px: [2, 3],
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Styled.h1 sx={{ margin: 0, fontSize: 20, fontWeight: 'bold' }}>
          <Link
            url="/"
            sx={{
              color: 'text',
              letterSpacing: -1,
              textDecoration: `none`,
              paddingLeft: '5px',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {siteTitle}
          </Link>
        </Styled.h1>
        <Link url="/cart" isButton>
          Cart{count ? '*' : ''}
        </Link>
      </div>
    </Styled.div>
  );
};

export default Header;
