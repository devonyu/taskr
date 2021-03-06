// @flow

import React, { useEffect, useState, useRef } from 'react';
import { Link } from '@reach/router';

const NavbarUnauthenticated = () => {
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
    // eslint-disable-next-line
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
        <Link to="/" onClick={() => toggleNav()}>
          TaskR
        </Link>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/features" onClick={() => toggleNav()}>
            Features
          </Link>
        </li>
        <li>
          <Link to="/technologies" onClick={() => toggleNav()}>
            Tech
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => toggleNav()}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => toggleNav()}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarUnauthenticated;
