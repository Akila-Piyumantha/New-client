import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar2styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar2 = () => {
  const [activeLink, setActiveLink] = useState('home');
  const navBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home'; 
    setActiveLink(currentPath);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY >= 110) {
      navBarRef.current.classList.add('scrolled');
    } else {
      navBarRef.current.classList.remove('scrolled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="nav-bar" ref={navBarRef}>
        <a className="nav-logo"  href="/home">AIRDYANA</a>
        <div className="nav-links-container">
          
          <a
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            href="/home"
            onClick={() => setActiveLink('home')}
          >
            Home
          </a>
          <a
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            href="/about"
            onClick={() => setActiveLink('about')}
          >
            About Us
          </a>
          <a
            className={`nav-link ${activeLink === 'products' ? 'active' : ''}`}
            href="/products"
            onClick={() => setActiveLink('products')}
          >
            Products
          </a>
          <a
            className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
            href="/services"
            onClick={() => setActiveLink('services')}
          >
            Services
          </a>
          <a
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            href="/contact"
            onClick={() => setActiveLink('contact')}
          >
            Contact Us
          </a>
          <a
            className={`nav-link ${activeLink === 'login' ? 'active' : ''}`}
            href="/login"
            onClick={() => setActiveLink('login')}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
