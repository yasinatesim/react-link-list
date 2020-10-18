import React from 'react';
import PropTypes from 'prop-types';

// Routes
import { Link } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node.isRequired,
  extraClass: PropTypes.string,
  to: PropTypes.string,
};

function Button({ children, extraClass, to, ...props }) {
  if (to) {
    return (
      <Link className={`btn ${extraClass}`} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`btn ${extraClass}`} type="button" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
