// @flow

import React from 'react';
import { Link } from '@reach/router';
import SignupLoginModal from './SignupLoginModal';

const HomePage = inputProps => {
  return (
    <main>
      <header>
        <div id="headerdiagonal" aria-hidden="true" />

        <section id="intro">
          <div className="container-lg">
            <h1>Organizing workflows has never been easier</h1>
            <p className="bodyText">
              TaskR helps individuals organize their work faster and easier than
              before. Team based features coming soon!
            </p>
            <ul>
              <li className="common-Button">
                <SignupLoginModal option="signup" />
              </li>
              <li className="common-Button">
                <SignupLoginModal option="login" />
              </li>
              <button
                className="common-Button"
                type="button"
                onClick={() => inputProps.handleLogin()}
              >
                Admin Login
              </button>
            </ul>
          </div>
        </section>
      </header>

      <section id="app-illustrations" className="">
        <div className="mac-laptop">
          <img alt="macbook" src="./images/macbook_animated.svg" />
        </div>
        <div className="phone">
          <img
            alt="iphone"
            height="100%"
            width="100%"
            src="./images/iphone_animated.svg"
          />
        </div>
        <div className="mac-desktop">
          <img alt="imac" src="./images/imac_animated.svg" />
        </div>
      </section>

      <section id="primary">
        <section id="complete-toolkit" className="container-lg">
          <h2 className="common-UppercaseTitle">
            <img
              className="heading-icon"
              src="./images/tasks.svg"
              alt="tasklist"
            />
            <span>Task management made simple</span>
          </h2>
          <p className="bodyText">
            TaskR builds the most powerful and flexible tools for task
            management. Whether you’re a developer, manager, designer, student.
            TaskR's interface is designed to create the best possible UI for
            users. Hundreds to thousdands of the world’s most innovative
            individuals are building faster and more efficiently by using TaskR.
          </p>
          <Link
            to="/technologies"
            className="bodyText common-Link common-Link--arrow"
          >
            Discover what technologies TaskR currently utilizes
          </Link>
        </section>
      </section>

      <section id="secondary">
        <div className="cols container-lg">
          <section id="always-improving">
            <img
              className="heading-icon"
              src="./images/browser.svg"
              alt="browser"
            />
            <h2 className="common-UppercaseText">Task View Component</h2>
            <p className="bodyText">
              Taskr's View component includes the most important data to help
              organize and sort tasks. Our world class engineering team includes
              Fullstack Developer Devon Yu and he is constantly iterating new
              features upon every facet of the Taskr stack. He is always open to
              feedback on what to build next!
            </p>
            <Link
              to="/features"
              className="bodyText common-Link common-Link--arrow"
            >
              Learn more about the TaskView component
            </Link>
          </section>

          <section id="global-scale">
            <img
              className="heading-icon"
              src="./images/checklist.svg"
              alt="checklist"
            />
            <h2 className="common-UppercaseText">Task List Component</h2>
            <p className="bodyText">
              With the Task List Material UI Table, users can customize how
              tasks are shown within the UI. From sorting, filtering, and
              searching tasks a user can have complete control on what tasks are
              shown.
            </p>
            <Link
              to="/features"
              className="bodyText common-Link common-Link--arrow"
            >
              Learn more about the TaskList component
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
