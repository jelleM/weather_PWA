import React from 'react';
import './cityInput.css';

const CityInput = ({ value, onChange, isError, errorMessage }) => (
  <div className="cityInput">
    <input className={`input ${isError && 'error'}`} type="text" value={value} onChange={onChange} />
    <p className="error-message">{errorMessage}</p>
  </div>
);
export default CityInput;
