// @flow

import React from 'react';
import SignupLoginModal from './SignupLoginModal';
import './Homepage2.css';

function Homepage2() {
  return (
    <div>
      <nav id="nav" className="nav">
        <button className="menu" type="button">
          <em className="hamburger" />
        </button>
        <div className="brand">
          <a href="./index.htm">TaskR</a>
        </div>
        <ul className="navbar">
          <li>
            <a href="./features.htm">Features</a>
          </li>
          <li>
            <a href="./technologies.htm">Tech</a>
          </li>
          <li>
            <a href="./about.htm">About</a>
          </li>
          <li>
            <SignupLoginModal />
          </li>
        </ul>
      </nav>

      <div className="mainContent">
        <main>
          <header>
            <div id="headerdiagonal" aria-hidden="true" />

            <section id="intro">
              <div className="container-lg">
                <h1>Organizing workflows has never been easier</h1>
                <p className="bodyText">
                  TaskR helps individuals organize their work faster and easier
                  than before. Team based features coming soon!
                </p>
                <ul>
                  <li className="common-Button">
                    <SignupLoginModal />
                  </li>
                  <li className="common-Button">
                    <SignupLoginModal />
                  </li>
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
                <span>Task management made simple</span>
              </h2>
              <p className="bodyText">
                TaskR builds the most powerful and flexible tools for task
                management. Whether you’re a developer, manager, designer,
                student. TaskR's interface is designed to create the best
                possible UI for users. Hundreds to thousdands of the world’s
                most innovative individuals are building faster and more
                efficiently by using TaskR.
              </p>
              <a className="bodyText" href="null">
                Discover what technologies TaskR currently utilizes
              </a>
            </section>
          </section>

          <section id="secondary">
            <div className="cols container-lg">
              <section id="always-improving">
                <h2 className="common-UppercaseText">Task View Component</h2>
                <p className="bodyText">
                  Taskr's View component includes the most important data to
                  help organize and sort tasks. Our world class engineering team
                  includes Fullstack Developer Devon Yu and he is constantly
                  iterating new features upon every facet of the Taskr stack. He
                  is always open to feedback on what to build next!
                </p>
                <a className="bodyText" href="null">
                  Learn more about the TaskView component
                </a>
              </section>

              <section id="global-scale">
                <h2 className="common-UppercaseText">Task List Component</h2>
                <p className="bodyText">
                  With the Task List Material UI Table, users can customize how
                  tasks are shown within the UI. From sorting, filtering, and
                  searching tasks a user can have complete control on what tasks
                  are shown.
                </p>
                <a className="bodyText" href="null">
                  Learn more about the TaskList component
                </a>
              </section>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div id="footerdiagonal" aria-hidden="true" />
        <section className="footer">
          <div className="footer__addr">
            <h1 className="footer__logo">TaskR</h1>
            <li className="common-Button">
              <SignupLoginModal />
            </li>
          </div>

          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">App Status</h2>
              <ul className="nav__ul">
                <li>
                  <a href="https://travis-ci.com/devonyu/taskr">
                    <img
                      alt="travisci"
                      src="https://api.travis-ci.com/devonyu/taskr.svg?branch=netlify"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://coveralls.io/github/devonyu/taskr?branch=master">
                    <img
                      src="https://coveralls.io/repos/github/devonyu/taskr/badge.svg?branch=master"
                      alt="Coverage Status"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://app.netlify.com/sites/taskronline/deploys">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="136"
                      height="20"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#EAFAF9"
                          fillRule="nonzero"
                          stroke="#007A70"
                          d="M67.5.5h63.5095c2.459 0 4.4905 1.6715 4.4905 3.7805v11.439c0 2.1105-2.0334 3.7805-4.4905 3.7805H67.5V.5z"
                        />
                        <path
                          fill="#007A70"
                          d="M72.752 12.2588h1.996c.0957.7998.9024 1.3125 2.0645 1.3125 1.0732 0 1.832-.5195 1.832-1.2647 0-.6289-.4922-.9912-1.7021-1.251l-1.2852-.2734c-1.7978-.376-2.6797-1.3125-2.6797-2.8164 0-1.8594 1.4971-3.083 3.7735-3.083 2.1738 0 3.7119 1.2168 3.7734 2.9736H78.583c-.0957-.7793-.8203-1.2988-1.8184-1.2988-1.0322 0-1.7158.4785-1.7158 1.2305 0 .6084.4717.957 1.627 1.2031l1.1894.253c1.9825.417 2.837 1.2714 2.837 2.8027 0 1.9892-1.5245 3.206-3.999 3.206-2.3516 0-3.876-1.1552-3.9512-2.9941zM89.274 7.46V15h-1.9277v-1.21h-.123c-.3555.875-1.0596 1.374-2.2012 1.374-1.627 0-2.6387-1.039-2.6387-2.789V7.46h1.9893v4.4023c0 1.039.4717 1.5723 1.3877 1.5723.9912 0 1.5244-.6221 1.5244-1.627V7.46h1.9893zm8.6677 2.6591h-1.8594c-.1367-.7177-.6494-1.1894-1.497-1.1894-1.0733 0-1.6749.7998-1.6749 2.2832 0 1.5039.6084 2.3174 1.6748 2.3174.8135 0 1.3467-.3965 1.4971-1.1416h1.8594c-.164 1.6884-1.3945 2.7754-3.3565 2.7754-2.3515 0-3.6845-1.422-3.6845-3.9512 0-2.502 1.3261-3.917 3.6845-3.917 1.9961 0 3.1924 1.1074 3.3565 2.8232zm8.2233 0h-1.8594c-.1367-.7177-.6494-1.1894-1.497-1.1894-1.0733 0-1.6749.7998-1.6749 2.2832 0 1.5039.6084 2.3174 1.6748 2.3174.8135 0 1.3467-.3965 1.497-1.1416h1.8595c-.1641 1.6884-1.3946 2.7754-3.3565 2.7754-2.3515 0-3.6846-1.422-3.6846-3.9512 0-2.502 1.3262-3.917 3.6846-3.917 1.9961 0 3.1924 1.1074 3.3565 2.8232zm4.8121-1.2988c-.9228 0-1.5722.6426-1.6406 1.6201h3.2129c-.041-.998-.6426-1.62-1.5723-1.62zm1.6133 4.0332h1.8525c-.3007 1.4219-1.5996 2.3106-3.4453 2.3106-2.2969 0-3.6504-1.4493-3.6504-3.8965 0-2.4541 1.3809-3.9717 3.623-3.9717 2.2218 0 3.5343 1.415 3.5343 3.8076v.6084h-5.1748v.1026c.0273 1.121.6835 1.8183 1.7226 1.8183.7861 0 1.3262-.2803 1.5381-.7793zm3.3698-3.1787c0-1.4287 1.2578-2.3789 3.1377-2.3789 1.914 0 3.042.7998 3.1513 2.2422h-1.8388c-.1026-.4854-.5606-.7861-1.2989-.7861-.711 0-1.2373.3212-1.2373.7998 0 .3691.3213.5947 1.0186.752l1.415.3075c1.463.3213 2.1192.9366 2.1192 2.0645 0 1.5039-1.3467 2.4883-3.3223 2.4883-1.9893 0-3.1924-.8135-3.3291-2.2627h1.9414c.1504.5127.6357.8066 1.4287.8066.7725 0 1.3057-.3213 1.3057-.8066 0-.3692-.2871-.5948-.9502-.7383l-1.3672-.3076c-1.4629-.3213-2.1738-1.0186-2.1738-2.1807zm7.7926 0c0-1.4287 1.2578-2.3789 3.1377-2.3789 1.914 0 3.042.7998 3.1513 2.2422h-1.8388c-.1026-.4854-.5606-.7861-1.2989-.7861-.7109 0-1.2373.3212-1.2373.7998 0 .3691.3213.5947 1.0186.752l1.415.3075c1.463.3213 2.1192.9366 2.1192 2.0645 0 1.5039-1.3467 2.4883-3.3223 2.4883-1.9892 0-3.1924-.8135-3.329-2.2627h1.9413c.1504.5127.6358.8066 1.4287.8066.7725 0 1.3057-.3213 1.3057-.8066 0-.3692-.2871-.5948-.9502-.7383l-1.3672-.3076c-1.4629-.3213-2.1738-1.0186-2.1738-2.1807z"
                        />
                        <path
                          fill="#0E1E25"
                          fillRule="nonzero"
                          stroke="#0E1E25"
                          d="M.5 4.9948C.5 2.5143 2.5215.5 5.0046.5H67.5v19H5.0046C2.518 19.5.5 17.4857.5 15.0052V4.9948z"
                        />
                        <path
                          fill="#FFF"
                          d="M21.2336 15V7.5215h1.6338v1.1963h.1162c.3555-.834 1.1075-1.3467 2.2217-1.3467 1.668 0 2.5772 1.0049 2.5772 2.789V15h-1.6953v-4.4365c0-1.1416-.4786-1.7158-1.5108-1.7158-1.0117 0-1.6474.6972-1.6474 1.7978V15h-1.6954zm11.696-6.2822c-1.0117 0-1.7227.7246-1.7979 1.8183h3.5205c-.0341-1.1074-.704-1.8183-1.7226-1.8183zm1.7363 4.2246h1.6065c-.3213 1.3603-1.5586 2.208-3.3223 2.208-2.2012 0-3.5274-1.456-3.5274-3.8623s1.3467-3.917 3.5137-3.917c2.1328 0 3.4112 1.415 3.4112 3.7734v.547h-5.2227v.0888c.041 1.2441.7588 2.0234 1.873 2.0234.8409 0 1.422-.3076 1.668-.8613zm3.9235-7.253h1.6885v1.88h1.5996v1.3535h-1.5996v3.6708c0 .7383.3144 1.0665 1.0254 1.0665.2392 0 .3691-.0137.5742-.0342v1.3261c-.2461.0479-.5606.082-.8887.082-1.7158 0-2.3994-.581-2.3994-2.0302V8.923h-1.1826V7.5693h1.1826V5.6895zM43.6408 15V4.6299h1.6953V15h-1.6953zm3.8551 0V7.5215h1.6885V15h-1.6885zm.8408-8.6953c-.6152 0-1.0459-.3965-1.0459-.9365s.4307-.9366 1.046-.9366c.622 0 1.0458.3965 1.0458.9366 0 .54-.4238.9365-1.0459.9365zM51.8296 15V8.9229h-1.2237V7.5693h1.2237v-.7861c0-1.4834.7587-2.2285 2.4199-2.2285.3623 0 .6699.0273.9433.0752V5.874c-.1367-.0205-.3418-.0342-.581-.0342-.7998 0-1.1143.3487-1.1143 1.0528v.6767h1.627V8.923H53.518V15h-1.6884zm5.7486 2.7139c-.1025 0-.5605-.0069-.6699-.0274v-1.3877c.0957.0205.3486.0274.4648.0274.7178 0 1.1211-.2735 1.3399-.9639l.0889-.3281-2.6729-7.5127h1.8594l1.75 5.8379h.1162l1.7432-5.838h1.791l-2.7002 7.7179c-.6358 1.8593-1.4356 2.4746-3.1104 2.4746z"
                        />
                        <path
                          fill="#40A6BC"
                          fillRule="nonzero"
                          d="M10.9497 5.2929l4.2427 4.2426c.3905.3906.3905 1.0237 0 1.4142l-4.2427 4.2427c-.3905.3905-1.0236.3905-1.4142 0L5.293 10.9497c-.3905-.3905-.3905-1.0236 0-1.4142L9.5355 5.293c.3906-.3905 1.0237-.3905 1.4142 0z"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Features</h2>
              <ul className="nav__ul">
                <li>
                  <a href="null">Task View</a>
                </li>
                <li>
                  <a href="null">Task List</a>
                </li>
                <li>
                  <a href="null">Upcoming feature</a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Technology</h2>

              <ul className="nav__ul">
                <li>
                  <a href="null">Front End Stack</a>
                </li>

                <li>
                  <a href="null">Server Side</a>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">About</h2>
              <ul className="nav__ul">
                <li>
                  <a href="null">Devon</a>
                </li>
                <li>
                  <a href="null">Github</a>
                </li>
                <li>
                  <a href="null">Profile</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="madewith">
            <span>
              Made with <span className="heart">♥</span> from San Francisco
            </span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Homepage2;
