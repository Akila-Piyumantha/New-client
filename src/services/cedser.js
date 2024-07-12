import React from 'react';
import './cardser.css'; // Import the CSS file

const GridCards = () => {
  return (
    <div className="obt-grid obtbody">
      <div className="obt-card">
        <img className="obt-card__img" src={`${process.env.PUBLIC_URL}/advance.jpg`} alt="image1" />
        <div className="obt-card__content">
          <h1 className="obt-card__header">Advanced HVAC Systems</h1>
          <div className="obt-card__text-wrapper">
            <p className="obt-card__text">At AIR Dynamic Solutions, we specialize in the design, installation, and maintenance of high-performance HVAC (Heating, Ventilation, and Air Conditioning) systems. Our team of experts crafts tailored solutions for residential, commercial, and industrial environments, ensuring optimal indoor climate control. We utilize state-of-the-art technology to enhance energy efficiency, improve air quality, and provide unparalleled comfort. Our commitment to sustainability means we prioritize eco-friendly practices, helping clients reduce their carbon footprint while enjoying superior climate control. </p>
          </div>
       
        </div>
      </div>
      <div className="obt-card">
        <img className="obt-card__img" src={`${process.env.PUBLIC_URL}/energy.jpg`} alt="image1" />
        <div className="obt-card__content">
          <h1 className="obt-card__header">Energy Management Solutions</h1>
          <div className="obt-card__text-wrapper">
            <p className="obt-card__text">Our energy management services are designed to help clients maximize energy efficiency and reduce operational costs. We conduct thorough energy audits to identify inefficiencies and recommend cutting-edge energy-saving technologies. Our solutions include the implementation of renewable energy systems, energy-efficient lighting, and advanced building management systems. We also offer continuous monitoring and optimization services to ensure long-term energy savings and sustainability. By integrating innovative strategies and technologies, we help clients achieve significant energy reductions and contribute to a greener future</p>
          </div>
     
        </div>
      </div>
      <div className="obt-card">
        <img className="obt-card__img" src={`${process.env.PUBLIC_URL}/auto.jpg`} alt="image1" />
        <div className="obt-card__content">
          <h1 className="obt-card__header">Custom Automation Systems</h1>
          <div className="obt-card__text-wrapper">
            <p className="obt-card__text">We specialize in designing and deploying custom automation systems that enhance operational efficiency and productivity. From smart building automation to industrial process controls, our solutions integrate seamlessly with existing infrastructure, providing real-time data, remote monitoring, and intelligent control. Our automation systems are engineered to meet the specific requirements of each client, driving innovation and performance.




</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default GridCards;
