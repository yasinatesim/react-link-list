/* istanbul ignore file */
import React from 'react';

function Arrow(props) {
  return (
    <svg height={20} viewBox="0 0 64 64" width={20} className="transform rotate-90" fill="currentColor" {...props}>
      <path d="M32 8a2 2 0 00-2 2v39.899L15.448 34.621a2 2 0 00-2.897 2.758l16.62 17.449A3.973 3.973 0 0032 56c1.068 0 2.073-.416 2.862-1.207l16.586-17.414a2 2 0 00-2.896-2.758L34 49.963V10a2 2 0 00-2-2z" />
    </svg>
  );
}

export default Arrow;
