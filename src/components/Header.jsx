import React from 'react';

import Logo from '../assets/svg/Icon/Logo.svg';
import Menu from '../assets/svg/Icon/Menu.svg';

const Header = () => {
  console.log('Header');
  return (
    <header>
      <nav className="flex items-center h-24 border-b border-gray-400">
        <Logo className="logo text-white" />
        <Menu className="ml-auto text-white w-10" />
      </nav>
      <h1 className="font-bold text-5xl lg:text-6xl leading-tight text-white text-center px-8 mt-10 mb-4">
        Viaje pelo mundo inteiro
      </h1>
      <h2 className="text-2xl lg:text-3xl leading-7 text-center px-10">
        Aqui você encontra os melhores voos do mundo
      </h2>
    </header>
  );
};

export default Header;
