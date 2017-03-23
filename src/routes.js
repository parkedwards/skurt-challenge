import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components here
import {
  Dashboard,
  Lookup,
  Results,
  Error
} from './views';

export default (
  <Route path='/' component={Dashboard}>
    <IndexRoute component={Lookup} />
    <Route path='results' component={Results} />
    <Route path='error' component={Error} />
  </Route>
);
