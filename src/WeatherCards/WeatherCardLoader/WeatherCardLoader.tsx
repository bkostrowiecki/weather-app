import React from 'react';
import ContentLoader from 'react-content-loader';

export const WeatherCardLoader = () => (
  <div className="card-body text-center">
    <ContentLoader
      height={210}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="25" y="15" rx="5" ry="5" width="300" height="10" />
      <rect x="25" y="45" rx="5" ry="5" width="300" height="10" />
      <rect x="25" y="75" rx="5" ry="5" width="300" height="10" />
      <rect x="25" y="105" rx="5" ry="5" width="300" height="10" />
      <rect x="25" y="135" rx="5" ry="5" width="300" height="10" />
      <rect x="25" y="165" rx="5" ry="5" width="300" height="10" />
      <rect x="25" y="195" rx="5" ry="5" width="300" height="10" />
    </ContentLoader>
  </div>
);
