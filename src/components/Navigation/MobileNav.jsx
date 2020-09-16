import React, { useState } from 'react';

import Logo from '../../assets/svg/Icon/Logo.svg';
import IconMenu from '../../assets/svg/Icon/Menu.svg';
import IconClose from '../../assets/svg/Icon/Close3.svg';
import CollapseMenu from './CollapseMenu';

const MobileNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="lg:hidden items-center h-24 border-b border-gray-400">
      <div className="flex items-center w-full h-full">
        <Logo className="logo text-white mr-3" />
        <button
          className="ml-auto text-white w-10 h-10 lg:hidden"
          onClick={() => setIsCollapsed(state => !state)}
        >
          {isCollapsed ? <IconMenu /> : <IconClose />}
          <span className="sr-only">{isCollapsed ? 'Abrir menu' : 'Fechar menu'}</span>
        </button>
      </div>
      <CollapseMenu isCollapsed={isCollapsed} />
    </nav>
  );
};

export default MobileNav;
