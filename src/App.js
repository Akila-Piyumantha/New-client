import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';

import BasicExample from './navbar';
import Component from './hero';
import Cardh from './card';
import Sidecard from './sidecardl';
import Sidecardr from './sidecardr';
import Newcard from './newcard';
import Navbar2 from './navbar2';
import Card1 from './card1';
import Card2 from './card2';
import Welcome from './welcomecard';
import Who from'./who';
import Team from'./team';
import Testimonials from'./testimonials';
import Footer from './footer';
import Sus from './sus';
import { useState, useEffect } from 'react';
import Home from'./home';
import About from './About/about';
import Contact from './Contact/contact';




import Pro from './Products/productdtails';
import Addpage from'./login/add2';
import Aservices from './services/aservice';
import LoginPage2 from './login/login2';


import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
function App() {

  const {user} = useAuthContext()
  
  return (
    
    <Router>
      <div className="App gradient-background">
        <div className="Content">
          <Navbar2 />
        </div>
        <Routes>
          <Route path='/' element={<Home />} id='home' />
          <Route path='/home' element={<Home />} id='home' />
          <Route path='/about' element={<About/>} id ='about'/>
          <Route path='/contact' element={<Contact/>} id ='contact'/>
          <Route path='/login' element={<LoginPage2 />} id='login' />
          <Route path='/add' element={user ? <Addpage /> :<Navigate to ="/login"/> } id='add' />
          <Route path='/products' element={<Pro />} id='products' />
          <Route path='/services' element={<Aservices />}  />
         
          


        </Routes>
        <>
          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;

