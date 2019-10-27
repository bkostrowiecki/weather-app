import React from 'react';
import './App.scss';
import { WeatherCards } from './WeatherCards/WeatherCards';
import { useWeatherApi } from './weatherApi/useWeatherApi';
import { Weather } from './weatherApi/weather';

const App: React.FC = () => {
  const weather: Weather | undefined = useWeatherApi();

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100">
          <div className="col">
            <h1 className="text-center">Weather Forecast</h1>
            <WeatherCards weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
