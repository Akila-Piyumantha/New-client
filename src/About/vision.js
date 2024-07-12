import React, { useRef, useState, useEffect } from 'react';
import './vision.css';
import '../navbar2styles.css' // Import CSS or use styled-components for styling

const SplitView = () => {
  const parentRef = useRef(null);
  const topPanelRef = useRef(null);
  const handleRef = useRef(null);

  const [skewHack, setSkewHack] = useState(0);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    if (parentRef.current && parentRef.current.classList.contains('skewed')) {
      setSkewHack(1000);
    }
  }, []);

  const onMouseMove = (event) => {
    if (!parentRef.current || !topPanelRef.current || !handleRef.current) return;

    // Get the delta between the mouse position and center point.
    const newDelta = (event.clientX - window.innerWidth / 2) * 0.5;

    // Move the handle.
    handleRef.current.style.left = `${event.clientX + newDelta}px`;

    // Adjust the top panel width.
    topPanelRef.current.style.width = `${event.clientX + skewHack + newDelta}px`;

    // Update delta state
    setDelta(newDelta);
  };

  return (
    <div className="splitview skewed mbody" ref={parentRef} onMouseMove={onMouseMove}>
      <div className="panel bottom">
        <div className="content">
          <div className="description">
            <h1 className='big-text23' >THE VISION</h1>
            <p className='under-top-small-text2'>To be the leading provider of innovative and sustainable dynamic solutions, empowering our clients to achieve excellence and contribute to a greener future</p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/vision3.jpg`}  />
        </div>
      </div>

      <div className="panel top" ref={topPanelRef}>
        <div className="content">
          <div className="description">
            <h1 className='big-text23'>THE MISSION</h1>
            <p className='under-top-small-text2'>At AIR Dynamic Solutions, we are committed to delivering cutting-edge, eco-friendly systems that drive success for our clients while championing sustainability and technological advancement.</p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/mission.jpg`}/>
        </div>
      </div>

      <div className="handle" ref={handleRef}></div>
    </div>
  );
};

export default SplitView;
