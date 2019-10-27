import React, { useState, SyntheticEvent } from "react";

export const CitySearchForm: React.FC<CitySearchFormProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState('Warsaw');

  const onSearchQueryChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  const onSearchFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    props.onSearch(searchQuery);
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
}
