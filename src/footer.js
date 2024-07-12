import React from 'react';
import './footerstyles.css';
import './navbar2styles.css';
import Footerl from './footerline';
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }; 
  return (
    <div className="rela-blockf footer-sectionf">
      <h2 className="small-headerf top-linkf" onClick={scrollToTop}>Back to Top</h2>
      <div className="rela-blockf social-buttons-containerf">
        <div className="social-buttonf facebook-buttonf"></div>
        <div className="social-buttonf twitter-buttonf"></div>
        <div className="social-buttonf instagram-buttonf"></div>
    
      </div>
      <a  href="/home" className="small-headerf23 top-linkf">AIRDYNAMIC SOLUTIONS PVT LTD</a>
      <p>
      Setting benchmarks in perfection and precision at AIR Dynamic Solutions<br />
      where excellence meets innovation, and quality defines our commitment...
      </p>
      <div className='under-top-small-textf' style={{ paddingTop: '40px' }}>
  Designed & Developed by Akila Piyumantha
</div>

    </div>
  );
};

export default Footer;
