import React from "react";

export const CityNotFound: React.FC<CityNotFoundProps> = (props: CityNotFoundProps) => {
    return (
      <div className="card">
        <div className="card-body text-center">
          <div className="card-title">
            <div className="display-4">
              City{' '}<mark>{props.citySearchQuery}</mark>{' '}was not found
            </div>
          </div>
        </div>
      </div>
    );
};

export interface CityNotFoundProps {
    citySearchQuery: string;
}