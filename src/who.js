import React from 'react';
import './whostyles.css';
import './welcomecardstyles.css';

const Who = () => {
  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp">
        <div className="blog-slider__item">
          <div className="blog-slider__img">
            <img src="/E.jpg" alt="Blog Image 1" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">Experience the Uniqueness of AirDyna</span>
            <div className="blog-slider__title">WHO ARE we</div>
            <div className="blog-slider__text">
            At AIR Dynamic Solutions, we specialize in providing advanced HVAC solutions worldwide since 2001, ensuring superior air conditioning and ventilation services
              </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
       
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default Who;
