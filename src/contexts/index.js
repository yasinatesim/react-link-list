import React from 'react';
import PropTypes from 'prop-types';

// Contexts
import { LinkListProvider } from 'contexts/link-list';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Contexts({ children }) {
  return (
    <LinkListProvider>
      {children}
    </LinkListProvider>
  );
}

Contexts.propTypes = propTypes;

export default Contexts;
