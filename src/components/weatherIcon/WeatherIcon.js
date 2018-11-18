import React from 'react';
import './weatherIcon.css';

const WeatherIcon = ({ icon }) => <img className="weatherIcon" src={require(`../../assets/icons/${icon}.svg`)} alt="Weather Icon" />;

export default WeatherIcon;
