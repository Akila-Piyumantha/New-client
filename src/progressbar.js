import React, { useEffect, useState } from 'react';
import './progressbar.css';

const ProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500); // Delay start for visibility
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="rela-block progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
};

const ProgressBar2 = () => {
  return (
    <div className="floated left bottom-right-side">
      <p style={{ color: '#25274D' }}>Customer Satisfaction</p>
      <ProgressBar value={99} />

      <p style={{ color: '#25274D' }}>Project Completion</p>
      <ProgressBar value={98} />

      <p style={{ color: '#25274D' }}>Excellence in Design</p>
      <ProgressBar value={95} />
    </div>
  );
};

export default ProgressBar2;

