import React from 'react';
import './teststyles.css'; 
import './navbar2styles.css';

const Testimonials = () => {
  return (
    <div className="rela-block2 testimonials-section2">
      <div className="floated2 left2 test-left2">
        <div className="abs-cent-text2">
          <h2 className="half-big-text has-border">Testimonials</h2>
        </div>
      </div>
      <div className="floated2 left2 test-right2">
        <div className="abs-cent-text2">
          <p className="space2">
            "Choosing AIR Dynamic Solutions was the best decision for our commercial HVAC needs. Their team not only delivered impeccable service but also exceeded our expectations in efficiency and professionalism. We trust them completely for our ongoing HVAC maintenance and recommend them without hesitation"
          </p>
          <h2 className="small-header1">Reggis Lorenso</h2>
          <p><em>Senior Quantity Surveyor at SASESH International PVT ltd</em></p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
