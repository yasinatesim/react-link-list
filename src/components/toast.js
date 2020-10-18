import React, { useContext } from 'react';

// Contexts
import LinkListContext from 'contexts/link-list';

// Containers
import Content from 'containers/content';

function Toast() {
  // Context
  const { toastMessage } = useContext(LinkListContext);
  const { title, content } = toastMessage;

  return (
    toastMessage !== '' && (
      <Content>
        <div className="absolute w-full z-10">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{title}</strong> <span className="block sm:inline">{content}</span>
          </div>
        </div>
      </Content>
    )
  );
}

export default Toast;
