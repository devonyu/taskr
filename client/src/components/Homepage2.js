// @flow

import React, { Fragment } from 'react';
import './Homepage2.css';
import NavbarUnauthenticated from './NavbarUnauthenticated';
import MainHomePage from './MainHomePage';
import Footer from './Footer';
import Features from './Features';
import Technologies from './Technologies';
import About from './About';

function Homepage2(inputProps) {
  const handleLogin = () => {
    console.log('change view to tasks');
    inputProps.setView('tasks');
  };

  return (
    <Fragment>
      <NavbarUnauthenticated />
      <div className="mainContent">
        {/* <MainHomePage handleLogin={handleLogin} />
         */}
        {/* <Features /> */}
        {/* <Technologies /> */}
        <About />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Homepage2;
