import React from 'react';

const SubscriptionIcon: React.FC = () => {
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
      <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
    </svg>
  );
};

export default SubscriptionIcon;
