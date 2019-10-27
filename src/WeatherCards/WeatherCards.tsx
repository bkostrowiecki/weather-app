import React from 'react';
import { WeatherCardContent } from './WeatherCardContent/WeatherCardContent';
import { Weather } from '../weatherApi/weather';
import { WeatherCardLoader } from './WeatherCardLoader/WeatherCardLoader';

export const WeatherCards: React.FC<WeatherCardsProps> = (props) => {
  if (!props.weather) {
      return (
        <div className="card-group">
          {[...new Array(5)].map((_value, index) => (
            <div className="card" key={index}>
              <WeatherCardLoader />
            </div>
          ))}
        </div>
      );
  }

  return (
    <div className="card-group">
      {props.weather.map((day) => 
      <div className="card" key={day.date}>
        <WeatherCardContent {...day} />
      </div>
      )}
    </div>
  );
};

export interface WeatherCardsProps {
  weather?: Weather;
};
