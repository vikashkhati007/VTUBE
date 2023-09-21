import React from 'react';

const LibraryIconSVG: React.FC = () => {
  const svgStyle: React.CSSProperties = {
    pointerEvents: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
  };

  return (
    <svg
      enableBackground="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      style={svgStyle}
      fill='white'
    >
      <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z" />
    </svg>
  );
};

export default LibraryIconSVG;