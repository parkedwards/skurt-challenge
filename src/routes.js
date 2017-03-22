import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components here
import Dashboard from './views/Dashboard';
import Lookup from './views/Lookup';

export default (
  <Route path='/' component={Dashboard}>
    <IndexRoute component={Lookup} />
  </Route>
);
