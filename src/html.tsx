import React, { ReactNode } from 'react';
import cheerio from 'cheerio';

/**
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to this component to complete the render.
 */

const postProcess = (body: string) => {
  let globalStyles = '';

  if (body.includes('<template')) {
    const $ = cheerio.load(body);
    const templates = $('template');

    templates.toArray().forEach(element => {
      const str = $(element).html();
      const styles = cheerio.load(String(str))('style');
      globalStyles += styles
        .toArray()
        .map(el => $(el).html())
        .join(' ');
    });
  }
  return { body, globalStyles };
};

interface HTMLProps {
  htmlAttributes: {};
  headComponents: ReactNode[];
  bodyAttributes: {};
  preBodyComponents: ReactNode[];
  body: string;
  postBodyComponents: ReactNode[];
}
const HTML: React.FC<HTMLProps> = props => {
  const { body, globalStyles } = postProcess(props.body);
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <style dangerouslySetInnerHTML={{ __html: globalStyles }}></style>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
