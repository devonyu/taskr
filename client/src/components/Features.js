// @flow

import React from 'react';

const Features = () => {
  return (
    <main>
      <header>
        <div id="headerdiagonal" aria-hidden="true" />

        <section id="intro2">
          <div className="container-lg">
            <h1>Features Page</h1>
            <p className="bodyText">
              Just a quicky about How to use the taskr App and its possible
              features and upcoming ones too!
            </p>
            <ul />
          </div>
        </section>
      </header>

      <div id="features" className="features">
        <section
          id="developer-centric"
          className="feature feature--developer feature--reversed"
        >
          <div className="container-lg">
            <article className="feature-content">
              <h2 className="common-UppercaseText">Task List View</h2>
              <p className="bodyText">
                Utilizing Material UI Table, users are able to customize their
                user experience based on their their specific needs. Users can
                search, sort, filter, and organize thier tasks by specific data
                metrics!
              </p>
            </article>

            <figure className="floating-cards">
              <div className="card">
                <img
                  src="./images/imac_animated.svg"
                  alt="imac_animated"
                  className="single-device-img"
                />
              </div>
            </figure>
          </div>
        </section>

        <section
          id="pre-certified-hardware"
          className="feature feature--hardware"
        >
          <div className="container-lg">
            <article className="feature-content">
              <h2 className="common-UppercaseText">Task Editor View</h2>
              <p className="bodyText">
                Utilizing the Tiny MCE API, our users can create tasks using a
                custom markdown editor and utilizes a wide array of features to
                make tasks easier to read and digest.
              </p>
            </article>

            <figure className="floating-cards">
              <div className="card">
                <img
                  src="./images/iphone_animated.svg"
                  alt="iphone_animated"
                  className="single-device-img"
                />
              </div>
            </figure>
          </div>
        </section>

        <section
          id="fleet-management"
          className="feature feature--reversed feature--fleet"
        >
          <div className="container-lg">
            <article className="feature-content">
              <h2 className="common-UppercaseText">Future Coming features</h2>
              <p className="bodyText">
                Ability to upload images to S3 bucket, offline usage and syncing
                back. Setting reminders via the app with notifications and email
                reminders with SendGrid API
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Features;
