import React from 'react';

import Logo from '../../assets/svg/Icon/Logo.svg';

const DesktopNav = () => {
  return (
    <>
      <nav className="hidden lg:flex items-center h-24 border-b border-gray-400">
        <Logo className="logo text-white mr-3" />
        <ul className="w-full flex">
          <li className="mr-6 text-white text-lg">
            <a href="#">Explore</a>
          </li>
          <li className="mr-6 text-white text-lg">
            <a href="#">Sobre nós</a>
          </li>
          <li className="mr-6 text-white text-lg">
            <a href="#">Seguros</a>
          </li>
          <li className="mr-6 text-white text-lg">
            <a href="#">Hotéis</a>
          </li>
          <li className="mr-6 text-white text-lg ml-auto">
            <a href="#">Viagens</a>
          </li>
          <li className="">
            <a href="#" className="px-4 py-2 rounded border-2 border-gray-400 text-white">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
