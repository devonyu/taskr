// @flow

import React from 'react';
import Homepage2 from './components/Homepage2';

function AuthenticatedApp(inputProps) {
  return (
    <>
      <Homepage2 setView={inputProps.setView} />
    </>
  );
}

export default AuthenticatedApp;
