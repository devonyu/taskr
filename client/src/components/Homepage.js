// @flow

import React from 'react';

function Homepage() {
  return (
    <div className="Homepage">
      <div className="Intro">
        <div className="left">
          <h1>Organize your Workflow</h1>
          <span>
            TaskR helps individuals organize their work faster and easier than
            before
          </span>
        </div>
        <div className="right">
          <img
            className="splashImagePhoto"
            src="/images/newbg.jpg"
            alt="coverphoto"
          />
        </div>
      </div>
      <div className="features">
        <div className="left">
          SingleTask view
          <img
            className="taskViewImage"
            src="/images/newbg.jpg"
            alt="coverphoto"
          />
        </div>
        <div className="right">
          <h1>Create meaningful tasks</h1>
          <span>
            add stuff like content, target date, links, tags, markdown, priorty,
            progress
          </span>
        </div>
        <div className="right">
          Tasklist view illustration
          <img
            className="taskViewImage"
            src="/images/taskrbg.jpeg"
            alt="coverphoto"
          />
        </div>
        <div className="left">
          <h1>TaskList View</h1>
          <span>Organize your task, sort, filter, search, view favorites!</span>
        </div>
      </div>
      <div className="casecontainer">
        <div className="caseitem">Developer Workflow</div>
        <div className="caseitem">Students Learning</div>
        <div className="caseitem">Project Management</div>
        <div className="caseitem">Every day life!</div>
      </div>
      <div className="lastcallcontainer">
        <div className="left">
          {' '}
          <span>Ready to get started</span>
          <span>Get in touch or Create an Account</span>
        </div>
        <div className="right">
          <button type="button">signup</button>
          <button type="button">contact</button>
        </div>
      </div>
      <div className="footercontainer">
        <div className="footeritem">Copy right </div>
        <div className="footeritem">Technologies</div>
        <div className="footeritem">Developer</div>
        <div className="footeritem">Resources</div>
      </div>
    </div>
  );
}

export default Homepage;
