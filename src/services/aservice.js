import React from 'react';
import './aservices.css';
import '../navbar2styles.css';
import GridCards from './cedser';
import Gallery2 from './gallery2';


const Aservices = () => {
  return (
    <>
      <div className='OPbody'>
      <div className="uniquehero-banner   grad-back2">
        <div className="unique-hero-banner__title " aria-hidden="true">OUR SERVICES</div>
        <img className="unique-hero-banner__image " src={`${process.env.PUBLIC_URL}/rock.jpg`} alt="Mountains" />
        <h1 className="unique-hero-banner__title unique-hero-banner__stroked-title ">OUR SERVICES</h1>
      </div>
      <div className='unique-hero-banner__uniquecontent'>
      <GridCards/>
      </div>
      
      </div>
    </>
  );
};

export default Aservices;

