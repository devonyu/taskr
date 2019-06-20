// @flow

import React from "react";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="splashImageContainer">
        <img className="splashImagePhoto" src="https://images.unsplash.com/photo-1497409988347-cbfaac2f0b12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=50" alt="coverphoto" />
        <div className="splashImageTitle">
          <h1>{"Keeping track of your tasks should be simple. And now they are"}</h1>
          <h3>Gif with movement</h3>
        </div>
      </div>
      <div className="callToActionContainer">
        <div className="callToActionLeft">
          <p>Create Tasks and view them based on multiple factors such as (Progress, Priority, Date created/updated, Favorited, Tags, etc).
          <br />
            Uses a Markdown editor for rich formatting</p>
        </div>
        <div className="callToActionRight">
          <button className="startButton" onClick={() => console.log('Get Started Clicked')}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
