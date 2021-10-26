import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UnAuthorisedApp from './UnAuthorisedApp';

const AppWithProvider = () => {
  return (
    <Router>
      <UnAuthorisedApp />
    </Router>
  );
};

export default AppWithProvider;
