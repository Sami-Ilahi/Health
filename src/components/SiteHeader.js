import React from 'react';
import config from '../../config';
import Logo from '../assets/img/f.logo.png';
export default function SiteHeader() {
  return (
    <h1 className="site-heading text-center text-white d-none d-lg-block">
      <img src={Logo} alt="logo" width={70} color="white" />
      <span className="site-heading-upper text-primary mb-3">
        {config.subHeading}
      </span>
      <span className="site-heading-lower">{config.heading}</span>
    </h1>
  );
}
