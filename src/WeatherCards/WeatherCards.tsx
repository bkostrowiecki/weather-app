import React from 'react';
import { WeatherCardContent } from './WeatherCardContent/WeatherCardContent';
import { WeatherApiResponse } from '../weatherApi/weatherApiResponse';
import { Weather } from '../weatherApi/weather';

export const WeatherCards: React.FC<WeatherCardsProps> = (props) => {
  if (!props.weather) {
      return <h1>Loading</h1>;
  }

  return (
    <div className="card-group">
      {props.weather!.map((day) => 
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
