import smoothscroll from 'smoothscroll-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import React from 'react';

// const Element = (props) => {
//   return props.children;
// };

const Scroll = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const { onClick = () => {} } = props;
    let elem = 0;
    let scroll = true;
    const { type, element, offset, timeout } = props;
    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;
        default:
      }
    }
    scroll
      ? scrollTo(elem, offset, timeout)
      : console.log(`Element not found: ${element}`); // eslint-disable-line

    onClick(e);
  };
  const scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <Element>
      {typeof props.children === 'object' ? (
        React.cloneElement(this.props.children, { onClick: handleClick })
      ) : (
        <span onClick={handleClick}>{props.children}</span>
      )}
    </Element>
  );
};

export default Scroll;
