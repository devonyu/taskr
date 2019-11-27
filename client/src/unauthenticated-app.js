// @flow

import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import './components/Homepage.css';
import NavbarUnauthenticated from './components/NavbarUnauthenticated';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Features from './components/Features';
import Technologies from './components/Technologies';
import About from './components/About';

const UnauthenticatedApp = inputProps => {
  return (
    <Fragment>
      <NavbarUnauthenticated />
      <div className="mainContent">
        <Router>
          <HomePage
            path="/"
            handleLogin={() => {
              inputProps.setView('tasks');
            }}
          />
          <Features path="/features" />
          <Technologies path="/technologies" />
          <About path="/about" />
        </Router>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UnauthenticatedApp;
