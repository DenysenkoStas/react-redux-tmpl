import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import MainRoutes from '../../routes/MainRoutes';

const MainContainer = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default MainContainer;
