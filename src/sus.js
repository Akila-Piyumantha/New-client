import React from 'react';

import './welcomecardstyles.css';
import './susstyles.css';

const Sus = () => {
  return (
    <div className="blog-slider2">
      <div className="blog-slider__wrp">
        <div className="blog-slider__item">
          <div className="blog-slider__img">
            <img src="/F.jpg" alt="Blog Image 1" />
          </div>
          <div className="blog-slider__content">
            <span style={{color:"#25274D"}} className="blog-slider__code">Small acts of sustainability lead to big changes for our planet</span>
            <div className="blog-slider__title2">We value sustainability</div>
            <div className="blog-slider__text2">
            At AIR Dynamic Solutions, sustainability is more than a goal ... it's our promise. Explore our initiatives and see our commitment in action.
            </div>
            <a href="#" className="blog-slider__button">READ MORE</a>
          </div>
       
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default Sus;
