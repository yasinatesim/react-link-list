import React, { useContext } from 'react';

// Contexts
import LinkListContext from 'contexts/link-list';

// Components
import Pagination from 'components/pagination';

import LinkListItem from './components/link-list-item';

function LinkList() {
  // Context
  const { links: allLinks, pageNumber, onChangePageNumber } = useContext(LinkListContext);

  const currentListIndex = (pageNumber - 1) * 5;
  const linksWithPagination = allLinks.slice(currentListIndex, currentListIndex + 5);

  // Constants
  const hasLinks = allLinks.length > 0;

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
            totalItems={allLinks.length}
            currentPage={pageNumber}
            onChange={(page) => onChangePageNumber(page)}
          />
        </div>
      )}
    </>
  );
}

export default LinkList;
