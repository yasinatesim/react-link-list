/* istanbul ignore file */
import React, { useContext } from 'react';

// Contexts
import LinkListContext from 'contexts/link-list';

// Components
import Button from 'components/button';
import { Arrow, Remove } from 'assets/icons';

function LinkListItem(item) {
  const { name, link, point } = item;

  // Context
  const { updateLinkItem, onToggleModal } = useContext(LinkListContext);

  return (
    <div className="flex mt-4 hover:bg-gray-100 rounded p-2 relative list-item">
      <div className="flex items-center justify-center flex-col border p-4 rounded">
        <span className="text-2xl font-bold">{point}</span>
        <span>Points</span>
      </div>
      <div className="ml-4 flex flex-col w-full">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{name}</span>
          <span className="text-gray-600 text-sm">({link})</span>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            className="flex items-center cursor-pointer rounded hover:bg-blue-800 hover:text-white p-2"
            onClick={() => updateLinkItem({ item, voteType: 'up' })}
          >
            <Arrow className="transform rotate-180" />
            <span className="ml-2">Up Vote</span>
          </Button>
          <Button
            className="flex items-center cursor-pointer rounded hover:bg-blue-800 hover:text-white p-2"
            onClick={() => updateLinkItem({ item, voteType: 'down' })}
          >
            <Arrow className="transform -rotate-60" />
            <span className="ml-2">Down Vote</span>
          </Button>
        </div>
        <Button
          className="absolute flex items-center justify-center right-0 cursor-pointer list-item__remove-button"
          onClick={() => onToggleModal({ isOpen: true, info: item })}
        >
          <Remove />
        </Button>
      </div>
    </div>
  );
}

export default LinkListItem;
