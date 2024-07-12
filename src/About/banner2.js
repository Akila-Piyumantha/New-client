import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import './navbar2styles';

// Function to create long shadow effect
const makelongshadow = (color) => {
  let val = `0px 0px ${color}`;
  for (let i = 1; i <= 200; i++) {
    val += `, ${i}px ${i}px ${color}`;
  }
  return val;
};

// Mixin for long shadow effect
const longshadow = (color) => css`
  text-shadow: ${makelongshadow(color)};
`;

// Styled component for the banner
const BannerContainer = styled.div`
  padding: 100px;
  text-align: center;
  overflow: hidden;
  border-bottom: 5px solid #ccc;
  background-color: #e13e06;
  background-image: url('A.jpg'); /* Add your image path */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  h1, h2 {
    line-height: 1;
    margin: 0;
    color: #fff;
  }

  h1 {
    font-size: 75px;
    ${({ color }) => longshadow(color)};
  }

  h2 {
    font-size: 40px;
    ${({ color }) => longshadow(color)};
  }
`;

const Banner2 = () => {
  const bannerRef = useRef(null);

  const handleScroll = () => {
    const banner = bannerRef.current;
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    banner.style.backgroundPositionY = `${rate}px`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BannerContainer ref={bannerRef} color=" rgba(0, 0, 0, 0.01)">
      <h1 className='big-text' style={{ paddingTop: '-10px' }}>About Us</h1>
      
    </BannerContainer>
  );
};

export default Banner2;