import React from 'react';
import { renderToString } from 'react-dom/server';

import config from 'config';

const { APP_NAME, BASE_URL, APP_DOM_CONTAINER } = config;

function Html(props) {
  const { component } = props;
  const initialState = JSON.stringify(props.initialState);
  const configs = JSON.stringify(config);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>{ APP_NAME }</title>
        <link rel="icon" href={"/assets/img/favicon.ico"} />
        <script dangerouslySetInnerHTML={{ __html: 'window.__INITIAL_STATE__ = ' + initialState + '; window.__CONFIG__ = ' + configs }}></script>
      </head>
      <body>
        <div id={ APP_DOM_CONTAINER } dangerouslySetInnerHTML={{ __html: renderToString(component) }}></div>
      </body>
    </html>
  );
}

Html.propTypes = {
  initialState: React.PropTypes.object,
  component: React.PropTypes.object,
};

export default Html;
