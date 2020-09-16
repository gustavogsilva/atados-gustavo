import React from 'react';

import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <Navigation />
      <h1 className="font-bold text-5xl lg:text-6xl leading-tight text-white text-center px-6 mt-10 mb-4">
        Viaje pelo mundo inteiro
      </h1>
      <h2 className="text-2xl lg:text-3xl leading-7 text-center px-10">
        Aqui você encontra os melhores voos do mundo
      </h2>
    </header>
  );
};

export default Header;
