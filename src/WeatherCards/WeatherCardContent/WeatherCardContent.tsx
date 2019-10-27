import React from 'react';
import { ForecastForDay } from '../../weatherApi/weather';
import moment from 'moment';

export const WeatherCardContent: React.FC<ForecastForDay> = props => {
  const capitalize = (str: string) =>
    str.slice(0, 1).toUpperCase() +
    str.slice(1);

  return (
    <>
      <div className="card-body text-center">
        <h5 className="card-title">{Math.round(props.temperature)}°C</h5>
        <p className="card-text">{capitalize(props.iconDescription)}</p>
        <img alt={props.iconDescription} src={props.iconUrl} />
        <p className="card-text">{moment(props.date).format('dddd')}</p>
      </div>
    </>
  );
};
