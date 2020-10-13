# Builder.io + Shopify + Gatsby Starter

:heavy_check_mark: All the power of going headless, speed of Gatsby and, the customizability of [Builder.io](https://builder.io)

:heavy_check_mark: Typescript + Theme-UI

:heavy_check_mark: [gatsby-theme-shopify-manager](https://github.com/thetrevorharmon/gatsby-theme-shopify-manager) The easiest way to build a shopify store on gatsby.

:heavy_check_mark: Analytics, A/B testing, product augmentation, and heatmaps out of the box.
<br />
<br />
<img src="https://imgur.com/HjBWIbv.gif" alt="Editor example" />

## Quick Start

- Create a private app in your shopify store and update the store name and token in `.env` files.

- Signup for [Builder.io](https://builder.io/signup), Find your [public API key](https://builder.io/account/organization) and add it in `.env` files.

- Clone this repository or use `gatsby new`

  ```shell
  # create a new Gatsby site using this starter
  gatsby new my-headless-store https://github.com/BuilderIO/gatsby-builder-shopify
  ```

- Add the Required Builder.io models to your organization:

  1.  `Product Page Template`: create a model of type component, assigning the editing url to your `{{host url}}/product`.

  2.  `Header`: create a model of type component, assigning the editing url to your host url.

- Create minimal content:
  1. Add a new header entry , and drag and drop the registred header component.
  2. Create a home page: a new entry from `Page` model with url path set to `/`, you can use all of the registered components and builder's built-in components as well to build this page.
  3. Create a new entry for `Product Page Template`, and use the `Product Page Details` custom component.

## 🧐 What's inside?

This starter demonstrates:

- creating product pages in builder.io for easier a/b testing and cusotm targeting.
- shows how to pass context with the editor for binding components to dynamic state object for easier templating, for things like product pages, collection pages.
- shows how can you customize and augment your data, for example a specific product in shopify you want to override it's description for an a/b test, that's as simple as setting a default binding, and allowing users to break the binding for a specific product handle.

See:

- [src/components/molecules/aware-builder-component.tsx](src/components/molecules/aware-builder-component.tsx)
- [src/templates/product-page.tsx](src/templates/product-page.tsx) for using GraphQL to query and render Builder.io components
- [@builder.io/gatsby](https://github.com/builderio/builder/tree/master/packages/gatsby) the plugin used in this starter to generate pages dynamically.

### Using your custom components in the editor

> 👉**Tip: want to limit page building to only your components? Try [components only mode](https://builder.io/c/docs/guides/components-only-mode)**

Register a component

```tsx
import { Builder } from '@builder.io/react';

class SimpleText extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Builder.registerComponent(SimpleText, {
  name: 'Simple Text',
  inputs: [{ name: 'text', type: 'string' }],
});
```

Then import it in the template entry point

```tsx
import './components/simple-text';
// ...
```

See:

- [design systems example](https://github.com/BuilderIO/builder/tree/master/examples/react-design-system) for lots of examples using your deisgn system + custom components

### Mixed Content errors when hosting on insecure http

Our editor uses the preview URL you supply for live editing. Because the editor is on `https`, the preview might not work correctly if your development setup uses http. To fix this, change your development set up to serve using https. Or, as a workaround, on Chrome you can allow insecure content on localhost, by toggling the `insecure content` option here [chrome://settings/content/siteDetails?site=http%3A%2F%2Flocalhost%3A9009](chrome://settings/content/siteDetails?site=http%3A%2F%2Flocalhost%3A8000)

## Prerequisites

- Node
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Available scripts

### `build`

Build the static files into the `public` folder

#### Usage

```sh
$ yarn build
```

### `develop` or `start`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`.

#### Usage

```sh
yarn develop
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

## CONTRIBUTING

Contributions are always welcome, no matter how large or small.

## Learn more

- [Official docs](https://www.builder.io/c/docs/getting-started)
