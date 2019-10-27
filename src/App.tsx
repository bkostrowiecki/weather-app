import React, { SyntheticEvent, useState } from 'react';
import './App.scss';
import { WeatherCards } from './WeatherCards/WeatherCards';
import { useWeatherApi } from './weatherApi/useWeatherApi';
import { Weather } from './weatherApi/weather';
import { CitySearchForm } from './CitySearchForm/CitySearchForm';
import { CityNotFound } from './CityNotFound/CityNotFound';

const App: React.FC = () => {
  const [cityNameToSearchFor, setCityNameToSearchFor] = useState('Warsaw');

  const weather: Weather | undefined | null = useWeatherApi(cityNameToSearchFor);

  const onCitySearchFormSearch = (searchQuery: string) => {
    setCityNameToSearchFor(searchQuery);
  };

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h1 className="text-center">Weather Forecast</h1>
                  <CitySearchForm onSearch={onCitySearchFormSearch} />
                  {(weather !== null ||
                    weather === undefined) && (
                      <WeatherCards weather={weather as Weather | undefined} />
                    )}
                  {weather === null && (
                    <CityNotFound citySearchQuery={cityNameToSearchFor} />
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
