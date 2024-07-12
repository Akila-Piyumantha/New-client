import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState, useEffect } from 'react';

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
import Who from './who';
import Team from './team';
import Testimonials from './testimonials';
import Footer from './footer';
import Sus from './sus';
import Services from './hservices';


function Home() {
  

  return (
    <div id='home'>
      
        <div className="App gradient-background" id='home'>
        <>
          <div>
            <Component />
          </div>
          <div style={{ paddingTop: '0px' }}>
            <Card1 />
          </div>
          <div style={{ paddingTop: '20px' }}>
            <Welcome />
          </div>
          <div style={{ paddingTop: '0px' }}>
            <Card2 />
          </div>
          <div style={{ paddingTop: '0px' }}></div>
          <div style={{ paddingTop: '-0px' }}>
            <Sus />
          </div>
          <div style={{ paddingTop: '' }}>
            <Services />
          </div>
          <div style={{ paddingTop: '30px' }}>
            <Testimonials />
          </div>
        </>
        </div>
      
      </div>
    
  );
}

export default Home;


