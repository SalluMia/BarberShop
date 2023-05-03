import React from 'react';
import Navbar from '../NavbarPage/Navbar';
import Home from './Home';
import ExploreServices from './ExploreServices';
import About from './About';
import Advantages from './Advantages';
import Book from './Book';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Footer from './Footer';

const Index = () => {
  return (
    <div className='w-100 overflow-x-hidden'>
      {/* <Navbar /> */}
      <Home />
      <ExploreServices />
      <About />
      <Advantages />
      <Book />
      <Reviews />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
