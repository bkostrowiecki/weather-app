import { WeatherApiResponse, WeatherApiListItem } from './weatherApiResponse';
import moment, { Moment } from 'moment';

export const transformWeatherApiResponse = (
  weatherApiResponse: WeatherApiResponse
) => {
  const forecastsList = weatherApiResponse.list;

  return [...Array(5)].map((_value, index) =>
    getForecastForDate(moment().add(index, 'days'), forecastsList)
  );
};

function getForecastForDate(date: Moment, forecasts: WeatherApiListItem[]) {
  const dateString = date.format('YYYY-MM-DD');

  const listItemsForThisDate = findForecastsForDate(dateString, forecasts);

  if (listItemsForThisDate.length === 0) {
    throw new Error(
      `Cannot calculate daily forecast for ${dateString} because there is no data for given date`
    );
  }

  const averageTemperature =
    listItemsForThisDate.reduce((acc, curr) => {
      return acc + curr.main.temp;
    }, 0) / listItemsForThisDate.length;

  const icon = getProperIconForDay(listItemsForThisDate);

  return {
    date: dateString,
    temperature: averageTemperature,
    ...icon
  };
}

function findForecastsForDate(
  dayToFind: string,
  forecasts: WeatherApiListItem[]
) {
  return forecasts.filter(
    forecast => extractDayFromDatetime(forecast.dt_txt) === dayToFind
  );
}

function extractDayFromDatetime(dateTime: string) {
  return dateTime.split(' ')[0];
}

function getProperIconForDay(listItemsForThisDate: WeatherApiListItem[]) {
  return {
    iconUrl: `http://openweathermap.org/img/wn/${listItemsForThisDate[0].weather[0].icon.replace(
      'n',
      'd'
    )}@2x.png`,
    iconDescription: listItemsForThisDate[0].weather[0].description
  };
}
