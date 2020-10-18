import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  callback: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function ClickAway({ callback, children }) {
  const ref = useRef(null);
  const escapeListener = useCallback((e) => {
    if (e.key === 'Escape') {
      callback();
    }
  }, []);

  const clickListener = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [ref.current],
  );

  useEffect(() => {
    document.addEventListener('click', clickListener);
    document.addEventListener('keyup', escapeListener);

    return () => {
      document.removeEventListener('click', clickListener);
      document.removeEventListener('keyup', escapeListener);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}

ClickAway.propTypes = propTypes;

export default ClickAway;
