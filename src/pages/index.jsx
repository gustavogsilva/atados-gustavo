import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

import Date from '../assets/svg/Icon/Date.svg';
import Image from '../assets/svg/Icon/Image.svg';
import Logo from '../assets/svg/Icon/Logo.svg';
import Menu from '../assets/svg/Icon/Menu.svg';
import Person from '../assets/svg/Icon/Person.svg';
import Place from '../assets/svg/Icon/Place.svg';
import Search from '../assets/svg/Icon/Search.svg';

const Home = () => {
  return (
    <>
      <div className="background">
        <Header />
        <Form />
      </div>
    </>
  );
};

Home.displayName = 'Home';
export default Home;
