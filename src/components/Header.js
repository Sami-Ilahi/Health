import React, { useState } from 'react';
import { Link } from 'gatsby';

import config from '../../config';

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (value) => {
    setOpenMenu(value);
  };

  const { activeLink } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <a
          className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
          href="/#"
        >
          {config.siteTitle}
        </a>

        <button
          onClick={(_) => toggleMenu(!openMenu)}
          className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded={openMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav text-center mx-auto">
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'home' ? 'active' : ''
              }`}
            >
              <Link className="nav-link text-uppercase text-expanded" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'over-ons' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/over-ons"
              >
                Over ons
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'products' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/products"
              >
                Wat Ik Bied
              </Link>
            </li>
            <li
              className={`nav-item px-lg-4 ${
                activeLink === 'store' ? 'active' : ''
              }`}
            >
              <Link
                className="nav-link text-uppercase text-expanded"
                to="/store"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
