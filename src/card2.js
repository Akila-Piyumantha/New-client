import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import './navbar2styles.css'; 
import './card1styles.css';
import './card2styles.css';
import './App.css'; 
import Who from'./who';
import Gallery from'./gallery';
import ProgressBar from './progressbar';
import ProgressBar2 from './progressbar';

function Card2() {
    return (

        <><div className="rela-block about-us-section " >
            <Who/>
                <div className="rela-block about-us-quad-container">
                    <div className="rela-block quad-row">
                        <div className="quad-half floated left">
                            <h2 style={{fontSize:"25px"}} className="small-header">Established Legacy</h2>
                            <p style={{color: '#25274D'}}>For over two decades, AIR Dynamic Solutions has been a pioneer in the air conditioning industry. Founded in 2001, our commitment to quality and innovation has made us a trusted name across the globe.</p>
                        </div>
                        <div className="quad-half floated left">
                            <h2 style={{fontSize:"25px"}}className="small-header">Global Reach</h2>
                            <p style={{color: '#25274D'}}>With a presence in over 10 countries, AIR Dynamic Solutions brings unparalleled comfort and cutting-edge technology to homes and businesses worldwide. Our international reputation is a testament to our excellence and reliability.</p>
                        </div>
                    </div>
                    <div className="rela-block quad-row">
                        <div className="quad-half floated left">
                            <h2 style={{fontSize:"25px"}}className="small-header">Innovative Technology</h2>
                            <p style={{color: '#25274D'}}>At AIR Dynamic Solutions, we leverage the latest advancements in air conditioning technology to provide efficient, eco-friendly, and high-performance solutions. Our state-of-the-art products are designed to meet the diverse needs of our customers, ensuring optimal comfort and satisfaction.</p>
                        </div>
                        <div className="quad-half floated left">
                            <h2 style={{fontSize:"25px"}}className="small-header">Customer-Centric Service</h2>
                            <p style={{color: '#25274D'}}>We pride ourselves on delivering exceptional customer service. Our team of dedicated professionals is committed to understanding and exceeding our customers' expectations. From consultation to installation and maintenance, we ensure a seamless and satisfying experience.</p>
                        </div>
                    </div>
                </div>
                <div style = {{paddingBottom:'20px'}} >
                     <Gallery/>
                </div>
                <div className="orbitron black-orb">\\\///</div>
                <div className="rela-block about-us-bottom-container">
                    <div className="floated left bottom-left-side">
                        <h2 style={{fontSize:"35px"}}className="small-header">our core values</h2>
                        <div style ={{color:"#25274D"}}className="lines-thing2 black"></div>
                        <p style={{color: '#25274D'}}>
                        At AIR Dynamic Solutions, we believe in upholding a set of core values that drive our commitment to excellence and customer satisfaction. These values are the foundation of our company, guiding our actions and decisions to ensure we deliver the highest quality service and innovative solutions in the HVAC industry. Our core values are not just principles we adhere to, but they are the essence of our identity and the promise we make to our clients, partners, and employees.
                        </p>
                    </div>
                    <div >
                      <ProgressBar2/>
                    </div>
                </div>
                <h1 className="half-big-text has-border">About Us</h1>
                <p style={{color: '#25274D',marginTop:"-15px"}}>Explore Our Commitment to Excellence and Professionalism at AIR Dynamic Solutions. Discover Innovation and Quality in HVAC Solutions</p>
                <div className="orbitron black-orb">\\\///</div>
            </div></>

);
}

export default Card2;