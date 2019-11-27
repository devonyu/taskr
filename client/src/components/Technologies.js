// @flow

import React from 'react';

const Technologies = () => {
  return (
    <main>
      <header>
        <div id="headerdiagonal" aria-hidden="true" />

        <section id="intro2">
          <div className="container-lg">
            <h1>Technologies</h1>
            <p className="bodyText">List the technologies we use here</p>
            <ul />
          </div>
        </section>
      </header>

      <section id="secondary">
        <div className="cols container-lg">
          <section id="always-improving">
            <h2 className="common-UppercaseText">
              <img
                className="heading-icon"
                src="./images/checklist.svg"
                alt="checklist"
              />
              Front End Tech
            </h2>
            <p className="bodyText">Front end stuff</p>
            <ol>
              <li>React</li>
              <li>Material UI</li>
              <li>Javascript</li>
              <li>LocalForage API</li>
            </ol>
          </section>

          <section id="global-scale">
            <h2 className="common-UppercaseText">
              <img
                className="heading-icon"
                src="./images/browser.svg"
                alt="browser"
              />
              Back End Tech
            </h2>
            <p className="bodyText">Backend</p>
            <ol>
              <li>Node + Express</li>
              <li>AWS DynamoDB + EC2</li>
              <li>Travis CI - Coveralls API</li>
              <li>Jest Testing</li>
            </ol>
          </section>
        </div>
      </section>
    </main>
  );
};
export default Technologies;
