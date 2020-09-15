import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import FormValues from '../components/FormValues';

const Home = () => {
  return (
    <div className="background px-3">
      <Header />
      <Form />
      <FormValues />
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
