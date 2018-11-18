import React from 'react';
import './measurement.css';

const Measurement = ({ value, desc, isLarge }) => (
  <div className="measurement">
    <span className={`measurement-value ${isLarge && 'value-large'}`}>{value}</span>
    <span className={`measurement-desc ${isLarge && 'desc-large'}`}>{desc}</span>
  </div>
);

export default Measurement;
