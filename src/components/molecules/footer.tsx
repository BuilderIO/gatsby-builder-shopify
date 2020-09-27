/** @jsx jsx */
import { Box, Styled, jsx } from 'theme-ui';

const Footer: React.FC = () => (
  <Box>
    <footer sx={{ mt: 6 }}>
      <Styled.p>
        © {new Date().getFullYear()} Built with
        {` `}
        <Styled.a href="https://www.builder.io">Builder.io</Styled.a>
        {` and `}
        <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
        {` and `}
        <Styled.a href="https://www.shopify.com">Shopify</Styled.a>.
      </Styled.p>
    </footer>
  </Box>
);

export default Footer;
