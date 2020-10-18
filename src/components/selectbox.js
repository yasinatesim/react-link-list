import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

// Utilities
import cls from 'classnames';
import { ClickAway } from 'utils';
import Store from 'store2';

const propTypes = {
  extraClass: PropTypes.string,
  onSelected: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      defaultSelected: PropTypes.bool,
    }),
  ),
  placeholder: PropTypes.string,
};

function Select({ extraClass, onSelected, options, placeholder, ...props }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  const onSelectOption = (option) => {
    setSelected(option);
    setShowOptions(false);
    onSelected(option);
  };

  useLayoutEffect(() => {
    const { sorting: sortingLS } = Store.get('link-list-app')
      ? Store.get('link-list-app')
      : { value: 'last-added', label: 'Last Added' };

    const option = sortingLS || options.find((item) => {
      return item.defaultSelected === true;
    });

    if (isMounted) onSelectOption(option);

    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  return (
    <ClickAway callback={() => setShowOptions(false)}>
      <div className={cls('relative', extraClass)}>
        <button
          type="button"
          className="flex w-56 items-center justify-between border bg-gray-100 py-3 px-5 rounded cursor-pointer focus:outline-none"
          onClick={() => setShowOptions(!showOptions)}
          {...props}
        >
          <span className="mr-2">{selected ? selected.label || placeholder : placeholder}</span>
          <div className="text-light-300">
            <svg viewBox="0 0 330 330" width="16" height="16">
              <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
            </svg>
          </div>
        </button>
        {showOptions && (
          <div className="bg-white z-10 py-3 border border-light-200 rounded-2 mt-1 absolute top-auto left-0 w-full">
            {options.map(({ value, label, defaultSelected = false }) => (
              <button
                type="button"
                key={value}
                className={cls('py-2 px-4 cursor-pointer focus:outline-none flex w-full', {
                  'font-normal bg-white': !selected || selected.value !== value,
                  'font-bold bg-gray-200':
                    (defaultSelected && !selected && !selected.value) || (selected && selected.value === value),
                })}
                onClick={() => onSelectOption({ value, label })}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </ClickAway>
  );
}

Select.propTypes = propTypes;

export default Select;
