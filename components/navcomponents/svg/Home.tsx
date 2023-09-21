import React from 'react';

const HomeIconSVG: React.FC = () => {
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
      <g>
        <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
      </g>
    </svg>
  );
};

export default HomeIconSVG;
