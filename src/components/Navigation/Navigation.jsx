import React from 'react';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigation = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
};

export default Navigation;
