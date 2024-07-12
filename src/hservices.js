// src/Services.js
import React from 'react';
import './hservices.css'; 
import './navbar2styles.css';

const Services = () => {
  return (
    <section className='bodyback2 sectiona '>
      <h3 className='half-big-text has-border'>Our Services</h3>
      <p className="section-lead under-top-small-text ">
      Explore a world of tailored solutions at AIR Dynamic Solutions. From innovative designs to seamless installations, discover excellence in every service we offer
      </p>
      <div className="services-grid">
        <div className="service service1">
          <i className="ti-bar-chart"></i>
          <h4 className='small-header'>Installation Services</h4>
          <p>AIR Dynamic Solutions excels in precise and reliable HVAC system installations. Whether for homes or large-scale commercial projects, our expert technicians ensure ...</p>
          <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
        </div>

        <div className="service service2">
          <i className="ti-light-bulb"></i>
          <h4 className='small-header'>Maintenance Contracts</h4>
          <p>Our comprehensive maintenance contracts offer scheduled inspections, cleaning, and adjustments to keep HVAC systems running smoothly year-round. Trust us to enhance ...</p>
          <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
        </div>

        <div className="service service1">
          <i className="ti-money"></i>
          <h4 className='small-header'>Customized Solutions</h4>
          <p>We specialize in designing tailored HVAC solutions to meet diverse needs. Whether it's optimizing layouts, achieving specific climate control, or enhancing energy ...</p>
          <a href="#" className="cta">Read more <span className="ti-angle-right"></span></a>
        </div>
      </div>
      <div className="orbitron black-orb">\\\///</div>
    </section>
  );
};

export default Services;
