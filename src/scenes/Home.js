import React, { Component } from 'react';
import format from 'date-fns/format';
import { Button, WeatherIcon, Measurement, CityInput } from '../components';
import './home.css';
import { weatherService } from '../services';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      lastSync: '',
      city: 'Antwerp',
      isError: false,
      errorMessage: '',
    };
    this.timer = null;
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    try {
      const weatherData = await weatherService.getWeather(this.state.city);
      this.setState({ weatherData, lastSync: format(new Date(), 'HH:mm:ss'), isError: false, errorMessage: '' });
    } catch (err) {
      this.setState({ isError: true, errorMessage:  err.errors[0].meta.data ? err.errors[0].meta.data.message : 'No network' });
    }
  };

  handleCityChange = async event => {
    await this.setState({ city: event.target.value });
    clearTimeout(this.timer);
    this.timer = setTimeout(this.getWeather, 500);
  };

  render() {
    const { weatherData, lastSync, city, isError, errorMessage } = this.state;
    return (
      <div className="app">
        {weatherData && (
          <div className="weather">
            <p className="last-sync">{`Last Sync: ${lastSync}`}</p>
            <img onClick={this.getWeather} className="sync" src={require('../assets/icons/sync.svg')} alt="sync" />
            <WeatherIcon icon={weatherData.weather[0].icon} />
            <div className="main-info">
              <CityInput value={city} onChange={this.handleCityChange} isError={isError} errorMessage={errorMessage} />
              <Measurement value={weatherData.main.temp} desc="°C" isLarge />
              <h2>{weatherData.weather[0].description}</h2>
            </div>
            <div className="extra-info">
              <div className="info-group">
                <p className="info-desc">Min.</p>
                <Measurement value={weatherData.main.temp_min} desc="°C" />
              </div>
              <div className="info-group">
                <p className="info-desc">Max.</p>
                <Measurement value={weatherData.main.temp_max} desc="°C" />
              </div>
              <div className="info-group">
                <p className="info-desc">Humidity</p>
                <Measurement value={weatherData.main.humidity} desc="%" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
