# Builder.io + Shopify + Gatsby Starter

:heavy_check_mark: All the power of going headless, speed of Gatsby and, the customizability of [Builder.io](https://builder.io)

:heavy_check_mark: Typescript + Theme-UI

:heavy_check_mark: [gatsby-theme-shopify-manager](https://github.com/thetrevorharmon/gatsby-theme-shopify-manager) The easiest way to build a shopify store on gatsby.

:heavy_check_mark: Analytics, A/B testing, product augmentation, and heatmaps out of the box.
<br />
<br />
<img src="https://user-images.githubusercontent.com/5093430/96180755-c331ff00-0ee7-11eb-8b9f-b5e80ba8052e.gif" alt="Editor example" />

## Get Started

### Install the Builder.io cli

```
npm install @builder.io/cli -g
```

### Clone this repo

using git

```
git clone https://github.com/BuilderIO/gatsby-builder-shopify
```

### Generate your Builder.io space

<!-- TODO: link "private key" to a forum post or doc showing how to create that -->

[Signup for Builder.io](builder.io/signup), then go to your [organization settings page](https://builder.io/account/organization?root=true), create a private key and copy it, then create your space and give it a name

```
cd gatsby-builder-shopify
builder create -k [private-key] -n [space-name] -d
```

This command when done it'll print your new space's public api key, copy it and add as the value for `GATSBY_BUILDER_PUBLIC_KEY` into the .env files (`.env.production` and `.env.development`)

```
GATBY_BUILDER_PUBLIC_KEY=...
```

### Connect Shopify

Now you have a space clone matching the spec defined in this repo, you'll need to connect it to your shopify store.

Create a [private app](https://help.shopify.com/en/manual/apps/private-apps) in your Shpoify store and generate both admin api keys and storefront API token.

Access your newly created space, by selecting it from the [list of spaces](https://builder.io/spaces) in your organization, then from space settings, configure the `@builder.io/plugin-shopify` with the required details: admin api key / password, store domain, please feel free to ignore the `import your products/collections` step since it's not needed for this starter.

Add your storefront api token to the .env files (`.env.all`)

```
GATSBY_SHOPIFY_ACCESS_TOKEN=...
GATSBY_SHOP_NAME=...
```

### Install dependencies

```
yarn
```

### Run the dev server

```
yarn develop
```

It'll start a dev server at `http://localhost:8000`

### Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BuilderIO/gatsby-builder-shopify)
For continuous deployment from netlify <> Builder.io :
- Create a [build hook](https://docs.netlify.com/configure-builds/build-hooks/) in netlify
- Add the build hook from last step to Builder.io global webhooks in your new [space settings](https://builder.io/account/space).


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
