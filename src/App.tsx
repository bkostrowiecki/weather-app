import React, { SyntheticEvent, useState, useEffect } from 'react';
import './App.scss';
import { WeatherCards } from './WeatherCards/WeatherCards';
import { useWeatherApi } from './weatherApi/useWeatherApi';
import { Weather } from './weatherApi/weather';
import { CitySearchForm } from './CitySearchForm/CitySearchForm';
import { CityNotFound } from './CityNotFound/CityNotFound';

const IMAGES_TO_PREFETCH = [
  'http://openweathermap.org/img/wn/01d@2x.png',
  'http://openweathermap.org/img/wn/02d@2x.png',
  'http://openweathermap.org/img/wn/03d@2x.png',
  'http://openweathermap.org/img/wn/04d@2x.png',
  'http://openweathermap.org/img/wn/09d@2x.png',
  'http://openweathermap.org/img/wn/10d@2x.png',
  'http://openweathermap.org/img/wn/11d@2x.png',
  'http://openweathermap.org/img/wn/13d@2x.png',
  'http://openweathermap.org/img/wn/50d@2x.png'
];


const App: React.FC = () => {
  const [cityNameToSearchFor, setCityNameToSearchFor] = useState('Warsaw');

  const weather: Weather | undefined | null = useWeatherApi(cityNameToSearchFor);

  const onCitySearchFormSearch = (searchQuery: string) => {
    setCityNameToSearchFor(searchQuery);
  };

  const [didPrefetchImages, setDidPrefetchImages] = useState(false);

  useEffect(() => {
    let prefetchingCounter = 1;
    IMAGES_TO_PREFETCH.forEach((imageUrl) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        prefetchingCounter++;

        if (prefetchingCounter === IMAGES_TO_PREFETCH.length) {
          setDidPrefetchImages(true);
        }
      };
    });
  }, []);

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center">Weather Forecast</h1>
                <CitySearchForm onSearch={onCitySearchFormSearch} />
                {(weather !== null || weather === undefined) && (
                  <WeatherCards
                    weather={weather as Weather | undefined}
                    isLoading={!didPrefetchImages}
                  />
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
