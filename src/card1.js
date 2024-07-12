import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import './navbar2styles.css'; 
import './card1styles.css';
import './App.css'; 

function Card1() {
    return (

<div className="rela-block under-top-section">
<div className="half-big-textc1 under-top-big-text">Air Dynamic Solutions</div>
<div className="lines-thing"></div>
<div className="content-with-ascii">
<p className="under-top-small-text">
With a foundation built on "Innovation and Excellence," AIRDYNA propels the air conditioning industry forward, providing cutting-edge solutions that cater to both residential and commercial needs. Our commitment to delivering superior quality and unparalleled service energizes key sectors of the economy, ensuring optimal climate control in diverse environments. AIRDYNA has established a robust presence in the market, successfully fostering partnerships with leading global brands to bring advanced air conditioning technologies to our valued clients.
</p>

<Nav.Link href ="about" className="has-lines white explore-button-container">Explore</Nav.Link>



<div className="ascii-art-container">
      <pre className="ascii-art">
       .        .        .        .{"\n"}{"\n"}{"\n"}
       

       .        .        .        .{"\n"}{"\n"}{"\n"}
       

       .        .        .        .{"\n"}{"\n"}{"\n"}
       

       .        .        .        .

      </pre>
    </div>
    </div>
</div>


);
}

export default Card1;