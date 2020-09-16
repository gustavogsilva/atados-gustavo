import React from 'react';

const CollapseMenu = ({ isCollapsed }) => {
  return (
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
  );
};

export default CollapseMenu;
