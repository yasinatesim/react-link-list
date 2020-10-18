import React, { useContext } from 'react';

// Contexts
import LinkListContext from 'contexts/link-list';

// Components
import Button from 'components/button';

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
            <svg height={20} viewBox="0 0 64 64" width={20} className="transform rotate-180 fill-current">
              <path d="M32 8a2 2 0 00-2 2v39.899L15.448 34.621a2 2 0 00-2.897 2.758l16.62 17.449A3.973 3.973 0 0032 56c1.068 0 2.073-.416 2.862-1.207l16.586-17.414a2 2 0 00-2.896-2.758L34 49.963V10a2 2 0 00-2-2z" />
            </svg>
            <span className="ml-2">Up Vote</span>
          </Button>
          <Button
            className="flex items-center cursor-pointer rounded hover:bg-blue-800 hover:text-white p-2"
            onClick={() => updateLinkItem({ item, voteType: 'down' })}
          >
            <svg height={20} viewBox="0 0 64 64" width={20} className="fill-current">
              <path d="M32 8a2 2 0 00-2 2v39.899L15.448 34.621a2 2 0 00-2.897 2.758l16.62 17.449A3.973 3.973 0 0032 56c1.068 0 2.073-.416 2.862-1.207l16.586-17.414a2 2 0 00-2.896-2.758L34 49.963V10a2 2 0 00-2-2z" />
            </svg>
            <span className="ml-2">Down Vote</span>
          </Button>
        </div>
        <Button
          className="absolute flex items-center justify-center right-0 cursor-pointer list-item__remove-button"
          onClick={() => onToggleModal({ isOpen: true, info: item  })}
        >
          <svg viewBox="0 0 512 512" width="26" height="26">
            <circle cx={256} cy={256} r={256} fill="#e04f5f" />
            <path fill="#fff" d="M119.68 240h272v32h-272z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default LinkListItem;
