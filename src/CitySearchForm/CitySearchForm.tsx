import React, { useState, SyntheticEvent, useEffect } from "react";
import gpsSignalIcon from './gps-signal.svg';
import './CitySearchForm.scss';

export const CitySearchForm: React.FC<CitySearchFormProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState(props.city);

  useEffect(() => {
    setSearchQuery(props.city);
  }, [props.city]);

  const onSearchQueryChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const onSearchFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    props.onSearch(searchQuery);
  };

  const onFindCityByGpsClick = (event: SyntheticEvent) => {
    event.preventDefault();
    props.onLocate();
  };

  return (
    <form className="form mb-2" onSubmit={onSearchFormSubmit}>
      <div className="input-group">
        <div className="input-group-prepend">
          <label htmlFor="cityToSearchFor" className="input-group-text">
            Type in city name
          </label>
        </div>
        <input
          id="cityToSearchFor"
          type="text"
          className="form-control"
          value={searchQuery}
          onChange={onSearchQueryChange}
          autoFocus={true}
        />
        <div className="input-group-append d-none d-sm-block">
          <button type="submit" className="btn btn-primary">
            Search for forecast
          </button>
          <button
            onClick={onFindCityByGpsClick}
            className="btn btn-primary"
            title="Find city by GPS"
          >
            <img className='gps-signal-icon' src={gpsSignalIcon} width="20" alt="GPS Signal Icon" />
          </button>
        </div>
      </div>
      <div className="d-block d-sm-none pt-2 pb-3">
        <button type="submit" className="btn btn-primary btn-block">
          Search for forecast
        </button>
      </div>
    </form>
  );
};

export interface CitySearchFormProps {
  onSearch: (searchQuery: string) => void;
  onLocate: () => void;
  city: string;
}
