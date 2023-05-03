import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Pages/NavbarPage/Navbar';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Pages/HomePage/Footer';
import Index from './Components/Pages/HomePage/Index';
import ListingPage from './Components/Pages/ListingPage/ListingPage';
import Services from './Components/Pages/Appointment/AppointmentForm';
import BarberDetails from './Components/Pages/BarberDetail/BarberDetails';
import LogIn from './Components/Pages/SignUp/LogIn';

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Navbar />
      <Routes >
        <Route path='/' element={<Index />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
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

      {/*<Search />
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
