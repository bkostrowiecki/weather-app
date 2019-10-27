import React from 'react';
import { ForecastForDay } from '../../weatherApi/weather';
import moment from 'moment';

export const WeatherCardContent: React.FC<ForecastForDay> = props => {
  return (
    <>
      <div className="card-body text-center">
        <h5 className="card-title">{Math.round(props.temperature)}°C</h5>
        <p className="card-text">{moment(props.date).format('dddd')}</p>
      </div>
    </>
  );
};
