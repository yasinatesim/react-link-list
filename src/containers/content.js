import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Content({ children }) {
  return <div className="container mx-auto my-10 max-w-lg relative">{children}</div>;
}

Content.propTypes = propTypes;

export default Content;
