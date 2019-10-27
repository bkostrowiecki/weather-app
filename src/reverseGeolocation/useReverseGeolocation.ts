import { useEffect, useState, Dispatch } from 'react';
import { OpenCageApiResponse } from './openCageApiResponse';

export const useReverseGeolocation = (tryLocate: number) => {
  const [result, setResult] = useState(undefined) as [
    string | null | undefined,
    Dispatch<string | null | undefined>
  ];

  useEffect(() => {
    let isMounted = true;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        getCityNameFromApi(position.coords.latitude, position.coords.longitude);
      });
    }

    setResult(undefined);

    const getCityNameFromApi = (async (latitude: number, longitude: number) => {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_OPEN_CAGE_API_KEY}&q=${latitude},${longitude}&language=en-US`
      );

      const responseBody: OpenCageApiResponse = await response.json();

      if (responseBody.status.code !== 200) {
        setResult(null);
        return;
      }

      if (isMounted) {
        setResult(responseBody.results[0].components.city);
      }
    });

    const cleanup = () => {
      isMounted = false;
    };

    return cleanup;
  }, [setResult, tryLocate]);

  return result;
};
