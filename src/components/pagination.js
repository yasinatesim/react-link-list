import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { Chevron } from 'assets/icons';

// Utilities
import cls from 'classnames';
import Button from './button';

const propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Pagination({ totalItems, currentPage, onChange }) {
  const perPage = 5;
  const pageCount = Math.ceil(totalItems / perPage);

  // Conditional Styling
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const renderPageNumbers = () => {
    const paginationItems = [];
    const range = 5;
    let startIndex = 1;
    let endIndex = pageCount;

    if (pageCount > range) {
      if (currentPage < range / 2 + 1) {
        startIndex = 1;
      } else if (currentPage >= pageCount - range / 2) {
        startIndex = Math.floor(pageCount - range + 1);
      } else {
        startIndex = currentPage - Math.floor(range / 2);
      }
      endIndex = startIndex + range - 1;
    }

    for (let i = startIndex; i <= endIndex; i += 1) {
      paginationItems.push(
        <Button
          key={i}
          extraClass={cls('outline-none focus:outline-none border p-2 mx-1 min-w-xs flex items-center justify-center', {
            'text-black bg-white': currentPage !== i,
            'text-white bg-black': currentPage === i,
          })}
          onClick={() => onChange(i)}
        >
          {i}
        </Button>,
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <Button
          extraClass={cls({
            'outline-none focus:outline-none cursor-not-allowed text-gray-600': isFirstPage,
          })}
          onClick={() => !isFirstPage && onChange(currentPage - 1)}
        >
          <Chevron className="transform rotate-90" />
        </Button>
        {renderPageNumbers()}

        <Button
          extraClass={cls({
            'outline-none focus:outline-none cursor-not-allowed text-gray-600': isLastPage,
          })}
          onClick={() => !isLastPage && onChange(currentPage + 1)}
        >
          <Chevron className="transform -rotate-90" />
        </Button>
      </div>
    </div>
  );
}

Pagination.propTypes = propTypes;

export default Pagination;
