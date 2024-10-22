import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IntroPage from './pages/intropage/IntroPage';
import './App.css';

import LoginPage from './pages/RegistrationPages/login/LoginPage';
import RegistrationPage from './pages/RegistrationPages/register/RegistrationPage';
import HomePage from './pages/HomePage/HomePage';
import OnlineConsultation from './pages/appointment/online/OnlineConsultation';
import BookAppointment from './pages/appointment/bookAppointment/BookAppointment';
import PatientDetails from './pages/PatientDetails/PatientDetails';
import BookingSuccessful from './pages/bookSuccessful/BookingSuccessful';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/home' element={<HomePage />} />
          {/* <Route path='/appointments' element={<AppointmentPage />} /> */}
          <Route path='/online-consultation' element={<OnlineConsultation />} />
          <Route path='/booking/:doctorId' element={<BookAppointment />} />
          <Route path='/continue' element={<PatientDetails />} />
          <Route path='/booking-successful' element={<BookingSuccessful />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
