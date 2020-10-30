/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import React from 'react';
import { Grid, Divider, Button, Card, Text, Image } from '@theme-ui/components';
import Link from '../components/atoms/link';
import SEO from '../components/atoms/seo';
import {
  useCartItems,
  useCheckoutUrl,
  useCart,
  useUpdateItemQuantity,
} from 'gatsby-theme-shopify-manager/src';
import NoSSR from '../components/atoms/no-ssr';
import builder from '@builder.io/react';

const CartPage = () => {
  const lineItems = useCartItems();
  const updateItemQuantity = useUpdateItemQuantity();
  // handing over session ID will allow you to do conversion tracking cross domains in Builder
  // otherwise not necessary
  const checkoutUrl = useCheckoutUrl() + `&builder.overrideSessionId=${builder.sessionId}`;
  const cart = useCart();
  const { tax, total } = getCartTotals(cart);

  function getCartTotals(cart: ShopifyBuy.Cart | null) {
    if (cart == null) {
      return { tax: '-', total: '-' };
    }

    const total = cart.subtotalPrice ? `$${Number(cart.subtotalPrice).toFixed(2)}` : '-';

    return {
      tax: '-',
      total,
    };
  }

  async function removeFromCart(variantId: string) {
    try {
      await updateItemQuantity(variantId, 0);
    } catch (e) {
      console.log(e);
    }
  }

  const getPrice = (price: any, currency: string) =>
    Intl.NumberFormat(undefined, {
      currency,
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0));

  const LineItem: React.FC<{ item: /*ShopifyBuy.LineItem todo: check if updated types*/ any }> = ({
    item,
  }) => (
    <Grid gap={2} columns={[1, 2, 4]}>
      <div>
        <div sx={{ padding: 1, border: '1px solid gray' }}>
          <Image alt={item.variant.image.altText} src={item.variant.image.src} />
        </div>
      </div>
      <div>
        <Link
          url={`/product/${item.variant.product.handle}/`}
          sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
        >
          {item.title}
        </Link>
        <Styled.ul sx={{ mt: 2, mb: 0, padding: 0, listStyle: 'none' }}>
          <li key="quantity">
            <strong>Quantity: </strong>
            {item.quantity}
          </li>
          {item.variant.selectedOptions.map((option: any) => (
            <li>
              {option.name}:{option.value}
            </li>
          ))}
        </Styled.ul>
      </div>
      <Button
        sx={{ justifySelf: 'flex-start' }}
        variant="link"
        onClick={() => removeFromCart(item.variant.id)}
      >
        Delete
      </Button>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 700,
          marginLeft: 'auto',
        }}
      >
        {getPrice(item.variant.priceV2.amount, item.variant.priceV2.currencyCode || 'USD')}
      </Text>
    </Grid>
  );

  const emptyCart = (
    <React.Fragment>
      <SEO title="Cart" />
      <Styled.h1>Cart</Styled.h1>
      <Styled.p>Your shopping cart is empty.</Styled.p>
    </React.Fragment>
  );

  const skeleton = <span>todo</span>;

  return (
    <NoSSR skeleton={skeleton}>
      {lineItems.length < 1 ? (
        emptyCart
      ) : (
        <React.Fragment>
          <SEO title="Cart" />
          <Styled.h1>Cart</Styled.h1>
          {lineItems.map(item => (
            <React.Fragment key={item.id}>
              <LineItem key={item.id} item={item} />
              <Divider sx={{ my: 3 }} />
            </React.Fragment>
          ))}
          <div sx={{ display: 'flex' }}>
            <Card sx={{ marginLeft: 'auto', minWidth: '10rem', p: 4 }}>
              <Styled.h3 sx={{ mt: 0, mb: 3 }}>Cart Summary</Styled.h3>
              <Divider />

              <Grid gap={1} columns={2} sx={{ my: 3 }}>
                <Text>Subtotal:</Text>
                <Text sx={{ marginLeft: 'auto' }}>{total}</Text>
                <Text>Shipping:</Text>
                <Text sx={{ marginLeft: 'auto' }}> - </Text>
                <Text>Tax: </Text>
                <Text sx={{ marginLeft: 'auto' }}>{tax}</Text>
              </Grid>

              <Divider />
              <Grid gap={1} columns={2}>
                <Text variant="bold">Estimated Total:</Text>
                <Text variant="bold" sx={{ marginLeft: 'auto' }}>
                  {total}
                </Text>
              </Grid>
              <br />
              {checkoutUrl != null ? (
                <a
                  sx={{ mt: 4, width: '100%' }}
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checkout
                </a>
              ) : null}
            </Card>
          </div>
        </React.Fragment>
      )}
    </NoSSR>
  );
};

export default CartPage;
