import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import Html from 'src/Html.react';

import routes from 'routes';

function routing(req, res, next) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const component = (<RouterContext {...renderProps} />);

      res.status(200).send('<!DOCTYPE html>\n' + renderToString(<Html component={component} />));
    } else {
      res.status(404).send('Not found');
    }
  });
}

export default routing;