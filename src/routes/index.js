import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routeList from './route-list';

const Routes = () => {
  const routeMap = routeList.map((route, index) => {
    /* eslint-disable-next-line */
    return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
  });

  return (
    <Router>
      <Switch>{routeMap}</Switch>
    </Router>
  );
};

export default Routes;
