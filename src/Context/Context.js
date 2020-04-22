import React from 'react';

const Context = React.createContext({
  onOpenNav: () => {},
  hideToast: () => {},
  showToast: false,
});

export default Context;
