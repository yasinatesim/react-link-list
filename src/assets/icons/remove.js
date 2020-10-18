import React from 'react';

function Arrow(props) {
  return (
    <svg viewBox="0 0 512 512" width="26" height="26" {...props}>
      <circle cx={256} cy={256} r={256} fill="#e04f5f" />
      <path fill="#fff" d="M119.68 240h272v32h-272z" />
    </svg>
  );
}

export default Arrow;
