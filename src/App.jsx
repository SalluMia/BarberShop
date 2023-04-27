import React from 'react';
import Navbar from './Components/Pages/NavbarPage/Navbar';
import Home from './Components/Pages/HomePage/Home';
import ExploreServices from './Components/Pages/HomePage/ExploreServices';
import About from './Components/Pages/HomePage/About';
import Advantages from './Components/Pages/HomePage/Advantages';
import Search from './Components/Pages/ListingPage/Search';
import TopBarber from './Components/Pages/ListingPage/TopBarber';
import Card from './Components/ReUseableComponents/Card';
import Testing from './Components/Pages/ListingPage/TopBarber';
import TopWomenBarber from './Components/Pages/ListingPage/TopWomenBarber';
import BarberDetail from './Components/Pages/BarberDetail/BarberDetail';
import SatisfiedClients from './Components/Pages/BarberDetail/SatisfiedClients';
import SignUp from './Components/Pages/SignUp/SignUp';
import Reviews from './Components/Pages/HomePage/Reviews';
import FAQ from './Components/Pages/HomePage/FAQ';
import Book from './Components/Pages/HomePage/Book';
import Footer from './Components/Pages/HomePage/Footer';
import Index from './Components/Pages/HomePage/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListingPage from './Components/Pages/ListingPage/ListingPage';
import Services from './Components/Pages/Appointment/index';
import BarberDetails from './Components/Pages/BarberDetail/BarberDetails';

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Navbar />
      <Routes >
        <Route path='/' element={<Index />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/barberlisting' element={<ListingPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<BarberDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
 
      {/* <Navbar />
      <Home />
      <ExploreServices />
      <About />
      <Advantages />
      <Book />
      <Reviews />
      <FAQ />
      <Footer /> */}

      {/* 
        
      <Search />
      <TopBarber />
      <TopWomenBarber />
      <BarberDetail />/
      <Card /> 
      <SatisfiedClients /> 
      <SignUp /> */}
    </>
  );
};

export default App;
