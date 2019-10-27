import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { transformWeatherApiResponse } from './transformWeatherApi';
import { Weather } from './weather';

export const useWeatherApi = (cityNameToSearchFor: string) => {
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityNameToSearchFor}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      const responseBody = await response.json();

      if (isMounted) {
        const transformedResponse = transformWeatherApiResponse(responseBody);
        setResult(transformedResponse as any);
      }
    })();

    const cleanup = () => {
      isMounted = false;
    };

    return cleanup;
  }, [cityNameToSearchFor]);

  return result;
};
