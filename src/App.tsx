import React, { SyntheticEvent, useState } from 'react';
import './App.scss';
import { WeatherCards } from './WeatherCards/WeatherCards';
import { useWeatherApi } from './weatherApi/useWeatherApi';
import { Weather } from './weatherApi/weather';
import { CitySearchForm } from './CitySearchForm/CitySearchForm';

const App: React.FC = () => {
  const [cityNameToSearchFor, setCityNameToSearchFor] = useState('Warsaw');

  const weather: Weather | undefined = useWeatherApi(cityNameToSearchFor);

  const onCitySearchFormSearch = (searchQuery: string) => {
    console.log(searchQuery);
    setCityNameToSearchFor(searchQuery);
  };

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100">
          <div className="col">
            <h1 className="text-center">Weather Forecast</h1>
            <CitySearchForm onSearch={onCitySearchFormSearch} />
            <WeatherCards weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
