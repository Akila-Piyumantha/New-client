
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import './navbar2styles.css'; 
import './card1styles.css';
import './card2styles.css';
import './welcomecardstyles.css';
import './App.css'; 

function Welcome() {
    return (

<div className="rela-block welcome-section">
            <img src="card1.jpg" alt="Descriptive Alt Text" className="card-image2" />
            <div className="abs-cent-text welcome-text">
                <h1 style={{marginTop:'-30px'}} className="big-text2">Welcome</h1>
                <div className="orbitron black-orb">\\\///</div>
                <p className="small-header">Your Trusted Partner in High-Tech Air Conditioning. </p>
                
            </div>
            </div>

        );
}

export default Welcome;            