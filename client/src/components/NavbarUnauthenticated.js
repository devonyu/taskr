// @flow

import React, { useEffect, useState, useRef } from 'react';

function NavbarUnauthenticated() {
  const [isNavOpen, setNav] = useState('nav');
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const toggleNav = () => {
    if (isNavOpen === 'nav') {
      setNav('nav open');
    } else {
      setNav('nav');
    }
  };

  const handleScroll = () => {
    if (
      isSticky === false &&
      ref.current &&
      ref.current.getBoundingClientRect().top < 0
    ) {
      setSticky(true);
    } else if (window.pageYOffset === 0) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav"
      className={isNavOpen + String(isSticky === true ? ' sticky' : '')}
      ref={ref}
    >
      <button className="menu" type="button" onClick={() => toggleNav()}>
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
          <a href="./signup.htm">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarUnauthenticated;
