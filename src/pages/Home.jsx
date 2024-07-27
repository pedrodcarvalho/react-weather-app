import React from 'react';

import NavBar from '../layouts/NavBar';
import Main from '../layouts/Main';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;
