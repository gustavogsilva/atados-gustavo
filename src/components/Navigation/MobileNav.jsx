import React, { useState } from 'react';

import Logo from '../../assets/svg/Icon/Logo.svg';
import Menu from '../../assets/svg/Icon/Menu.svg';
import Close from '../../assets/svg/Icon/Close3.svg';

const MobileNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <nav className="lg:hidden items-center h-24 border-b border-gray-400">
        <div className="flex items-center w-full h-full">
          <Logo className="logo text-white mr-3" />
          <button
            className="ml-auto text-white w-10 h-10 lg:hidden"
            onClick={() => setIsCollapsed(state => !state)}
          >
            {isCollapsed ? <Menu /> : <Close />}
            <span className="sr-only">{isCollapsed ? 'Abrir menu' : 'Fechar menu'}</span>
          </button>
        </div>

        {/* Collapse Menu */}
        <ul
          className={`
            ${isCollapsed ? 'left-100 opacity-0' : 'left-0 opacity-1'}
            w-screen flex flex-col bg-white text-gray-800 absolute z-10 transition-all duration-500 ease shadow-lg
          `}
          aria-hidden={isCollapsed ? 'true' : 'false'}
        >
          <li className="flex">
            <a className="teste w-screen text-center border-b border-gray-200 p-5" href="#">
              Login
            </a>
          </li>
          <li className="flex">
            <a className="teste w-screen text-center border-b border-gray-200 p-5" href="#">
              Explore
            </a>
          </li>
          <li className="flex">
            <a className="teste w-screen text-center border-b border-gray-200 p-5" href="#">
              Sobre nós
            </a>
          </li>
          <li className="flex">
            <a className="teste w-screen text-center border-b border-gray-200 p-5" href="#">
              Seguros
            </a>
          </li>
          <li className="flex">
            <a className="teste w-screen text-center border-b border-gray-200 p-5" href="#">
              Hotéis
            </a>
          </li>
          <li className="flex">
            <a className="teste w-screen text-center border-b border-gray-200 p-5" href="#">
              Viagens
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
