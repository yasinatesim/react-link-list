import * as React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeList from './route-list';

const propTypes = {
  children: PropTypes.node,
};

function Routes({ children }) {
  const routeMap = routeList.map((route, index) => {
    return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
  });

  return (
    <Router>
      <Switch>{children || routeMap}</Switch>
    </Router>
  );
}

Routes.propTypes = propTypes;

export default Routes;
