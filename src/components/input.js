import React from 'react';
import PropTypes from 'prop-types';

// Utilities
import cls from 'classnames';

const propTypes = {
  error: PropTypes.string,
  extraClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function Input({ error, extraClass, id, label, ...props }) {
  const inputClasses = cls('outline-none border border-light-200 rounded-2 placeholder-light-300 py-3 pl-5 w-full', {
    'border-danger-200 bg-danger-400 text-danger-200 hover:border-danger-300 focus:border-danger-300': error,
    'hover:border-light-400 focus:border-light-400 placeholder-light-300 text-light-400': !error,
  });

  return (
    <div className={extraClass}>
      <div className="flex justify-between mb-1">
        <label className={cls('inline-block', { 'text-red-400': error })} htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        type="text"
        className={cls(inputClasses, {
          'border-red-400': error,
        })}
        id={id}
        {...props}
      />
      {error && <div className="mt-1 text-red-400">{error}</div>}
    </div>
  );
}

Input.propTypes = propTypes;

export default Input;
