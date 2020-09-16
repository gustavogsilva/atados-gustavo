import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import FormValues from '../components/FormValues';

const Home = () => {
  return (
    <div className="background">
      <div className="container px-3 lg:px-5">
        <Header />
        <Form />
        <FormValues />
      </div>
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
