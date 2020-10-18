import React from 'react';
import PropTypes from 'prop-types';

// Containers
import Content from 'containers/content';

const propTypes = {
  message: PropTypes.object.isRequired,
};

function Toast({ message }) {
  const { title, content } = message;

  return (
    <Content>
      <div className="absolute w-full z-10">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{title}</strong> <span className="block sm:inline">{content}</span>
        </div>
      </div>
    </Content>
  );
}

Toast.propTypes = propTypes;

export default Toast;
