// @flow

import React from 'react';

function Homepage() {
  return (
    <div className="Homepage">
      <section id="intro">
        <div className="intro">
          <div className="left">
            <h1>Organizing workflows has never been easier</h1>
            <p>
              TaskR helps individuals organize their work faster and easier than
              before. Team based features coming soon!
            </p>
            <span>
              <button>Start Now</button>
            </span>
            <span>
              <button>Sign Ins</button>
            </span>
            <span />
          </div>
          <div className="right">
            <img
              className="splashImagePhoto"
              src="/images/newbg.jpg"
              alt="coverphoto"
            />
          </div>
        </div>
      </section>
      <section id="description">
        <div className="right">
          <div>
            <h1>TASK MANAGEMENT MADE SIMPLE</h1>
            <p>
              TaskR builds the most powerful and flexible tools for task
              management. Whether you’re a developer, manager, designer,
              student. TaskR's interface is designed to create the best possible
              UI for users. Hundreds to thousdands of the world’s most
              innovative individuals are building faster and more efficiently by
              using TaskR.
            </p>
          </div>
          <div>break line</div>
          <span>Discover what technologies TaskR currently utilizes </span>
        </div>
        <div className="left">
          <img
            className="taskViewImage"
            src="/images/macbook_animated.svg"
            alt="coverphoto"
          />
        </div>
      </section>

      <div className="features">
        <div className="right">
          <img
            className="taskViewImage"
            src="/images/iphone_animated.svg"
            alt="coverphoto"
          />
        </div>
        <div className="left">
          <h1>TaskList View</h1>
          <span>Organize your task, sort, filter, search, view favorites!</span>
        </div>
        <div className="left">
          <img
            className="taskViewImage"
            src="/images/imac_animated.svg"
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
      </div>
      <div className="casecontainer">
        <div className="caseitem">Developer Workflow</div>
        <div className="caseitem">Students Learning</div>
        <div className="caseitem">Project Management</div>
        <div className="caseitem">Every day life!</div>
      </div>
      <div className="lastcallcontainer">
        <div className="lastcallleft">
          <div>Ready to get started</div>
          <div>Get in touch or Create an Account</div>
        </div>
        <div className="lascallright">
          <button type="button">Sign up</button>
          <button type="button">Contact</button>
        </div>
      </div>
      <div className="footercontainer">
        <div className="footeritem">Taskr C</div>
        <div className="footeritem">Technologies</div>
        <div className="footeritem">Developer</div>
        <div className="footeritem">Resources</div>
      </div>
    </div>
  );
}

export default Homepage;
