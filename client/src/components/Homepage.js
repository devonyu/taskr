// @flow

import React from 'react';
import SignupLoginModal from './SignupLoginModal';
import taskrbg from '../images/taskrbg.jpeg';

function Homepage() {
  return (
    <div className="Honpm install -g flow-typedmepage">
      <div className="splashImageContainer">
        <img className="splashImagePhoto" src={taskrbg} alt="coverphoto" />
        <div className="splashImageTitle">
          <h1>Keeping track of your tasks should be simple. Now they are..</h1>
        </div>
      </div>
      <div className="callToActionContainer">
        <div className="callToActionLeft">
          <p>
            Create Tasks and view them based on multiple factors such as
            (Progress, Priority, Date created/updated, Favorited, Tags, etc).
            <br />
            Uses a Markdown editor for rich formatting
          </p>
        </div>
        <div className="callToActionRight">
          <SignupLoginModal />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
