// Component.js

import React, { useState, useEffect } from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import './navbar2styles.css'; 
import './App.css'; // Ensure your custom CSS is imported

const bannerData = [
  {
    layers: [
      { image: 'FL.jpg', speed: -30 },
      { image: 'FL.jpg', speed: -30 },
    ],
    quotes: ["", "Sustainable Comfort for a Greener Tomorrow", "Embrace the Future of Energy-Efficient Cooling"],
  },
  {
    layers: [
      { image: 'cat.jpg', speed: -30 },
      { image: 'cat.jpg', speed: -30 },
    ],
    quotes: ["", "Harnessing Technology for Sustainable Comfort", "Smart Solutions for Modern Living"],
  },
  {
    layers: [
      { image: 'hike.jpg', speed: -30 },
      { image: 'hike.jpg', speed: -30 },
    ],
    quotes: ["Experience the Best", "Feel the Difference", "Pure Comfort Awaits..."],
  },
  {
    layers: [
      { image: '1.jpg', speed: -30 },
      { image: '1.jpg', speed: -30 },
    ],
    
    quotes: ["", "Trust in Excellence, Trust in Us", "Building Relationships Through Quality and Service"],
  },
  {
    layers: [
      { image: '3A.jpg', speed: -30 },
      { image: '3A.jpg', speed: -30 },
    ],
    quotes: ["", "Comfort You Can Trust, Quality You Can Feel", "Experience the Difference with Our Premium Air Conditioners"],
  },
  // Add more banner objects here
];

const Component = () => {
  const [currentBanner, setCurrentBanner] = useState(bannerData[0]);
  const [enterClass, setEnterClass] = useState('entered');

  useEffect(() => {
    const interval = setInterval(() => {
      // Remove the class to reset the transition
      setEnterClass('');

      // Delay to allow the removal effect before changing the banner
      setTimeout(() => {
        setCurrentBanner(prevBanner => {
          const currentIndex = bannerData.indexOf(prevBanner);
          const nextIndex = (currentIndex + 1) % bannerData.length;
          return bannerData[nextIndex];
        });

        // Re-add the class for transition effect
        setEnterClass('entered');
      }, 50); // Adjust the delay as needed for smooth transition
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Re-add the class when currentBanner changes to trigger the transition
    setEnterClass('entered');
  }, [currentBanner]);

  return (
    <ParallaxProvider>
      <div style={{ height: '100vh', width: '100%' }}>
        <ParallaxBanner
          layers={currentBanner.layers}
          className="aspect-[2/1]"
          style={{ height: '100%', width: '100%' }}
        >
          <div className="overlay rela-block grad-back"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center hero-text-container " style={{ height: '100%', width: '100%' }}>
            <div className="quote-container big-text">
              <span className={`quote-bold ${enterClass}`} >{currentBanner.quotes[0]}</span>
              <span className={`quote-bold ${enterClass}`}>{currentBanner.quotes[1]}</span>
              <span className={`quote-normal ${enterClass}`}>{currentBanner.quotes[2]}</span>
              <div class="orbitron top-orb">\\\///</div>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};

export default Component;
