import React, { CSSProperties } from 'react';

const ItemsMenuSVG: React.FC = () => {
  const svgStyle: CSSProperties = {
    pointerEvents: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
  };

  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      focusable="false"
      style={svgStyle}
      fill='white'
    >
      <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
    </svg>
  );
};

export default ItemsMenuSVG;
