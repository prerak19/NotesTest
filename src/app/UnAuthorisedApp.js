import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

const UnAuthorisedApp = () => {
  const location = useLocation();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect
        to={{
          pathname: '/',
          state: { from: location },
        }}
      />
    </Switch>
  );
};

export default UnAuthorisedApp;
