import React from 'react';
import PropTypes from 'prop-types';

// Components
import Pagination from 'components/pagination';

// Local Component
import LinkListItem from './components/link-list-item';

const propTypes = {
  links: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
  onChangePageNumber: PropTypes.func.isRequired,
};

function LinkList({ links, pageNumber, onChangePageNumber }) {
  const currentListIndex = (pageNumber - 1) * 5;
  const linksWithPagination = links.slice(currentListIndex, currentListIndex + 5);

  // Constants
  const hasLinks = links.length > 0;

  const renderNoResult = () => {
    return !hasLinks && <div className="border p-4">Henüz link listesine ekleme yapmadınız.</div>;
  };

  return (
    <>
      {renderNoResult()}

      {linksWithPagination.map((item, key) => (
        <LinkListItem {...item} key={key} />
      ))}

      {hasLinks && (
        <div className="mt-4">
          <Pagination
            totalItems={links.length}
            currentPage={pageNumber}
            onChange={(page) => onChangePageNumber(page)}
          />
        </div>
      )}
    </>
  );
}

LinkList.propTypes = propTypes;

export default LinkList;
