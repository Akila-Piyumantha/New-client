import React, { useState, useEffect, useRef } from 'react';
import './aboutcstyles.css';

const Carda = ({ dataImage, children }) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDimensions({
      width: cardRef.current.offsetWidth,
      height: cardRef.current.offsetHeight,
    });
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - dimensions.width / 2,
      y: e.clientY - rect.top - dimensions.height / 2,
    });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMousePos({ x: 0, y: 0 });
    }, 1000);
  };

  const mousePX = mousePos.x / dimensions.width;
  const mousePY = mousePos.y / dimensions.height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 20}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="cardabout" style={cardStyle}>
        <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
        <div className="card-info">{children}</div>
      </div>
    </div>
  );
};

export default Carda;

