import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './navbar2styles.css'; 
import './App.css'; 
import './gallerystyles.css';

const Gallery = () => {
  return (
    <div className="rela-block2 portfolio-bottom2">
      <div className="floated2 left2 quarter-div2">
        <div className="abs-cent-text2">
          <h1 className="big-text3">8000+</h1>
          <p style={{color: '#86C232'}}>Happy Clients</p>
        </div>
      </div>
      <div className="floated2 left2 quarter-div2">
        <div className="abs-cent-text2">
          <h1 className="big-text3">8</h1>
          <p style={{color: '#86C232'}}>Global Locations</p>
        </div>
      </div>
      <div className="floated2 left2 quarter-div2">
        <div className="abs-cent-text2">
          <h1 className="big-text3">100+</h1>
          <p style={{color: '#86C232'}}>Products</p>
        </div>
      </div>
      <div className="floated2 left2 quarter-div2">
        <div className="abs-cent-text2">
          <h1 className="big-text3">100+</h1>
          <p style={{color: '#86C232'}}>Human capital</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
