import { WeatherApiResponse } from './weatherApiResponse';
import { transformWeatherApiResponse } from './transformWeatherApi';
import moment from 'moment';

describe('Transform 3 hour based weather forecast to simple view model', () => {
  beforeEach(() => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementation(() => new Date('2019-10-27').valueOf())
  });

  it(`calculates average temperatures for 5 days`, () => {
    const weatherApiResponse = createTransformWeatherApiFixture();

    const viewModel = transformWeatherApiResponse(
      weatherApiResponse as WeatherApiResponse
    );

    expect(viewModel).toEqual([
      {
        date: '2019-10-27',
        temperature: 1,
        iconDescription: 'clear sky',
        iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png'
      },
      {
        date: '2019-10-28',
        temperature: 0,
        iconDescription: 'clear sky',
        iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png'
      },
      {
        date: '2019-10-29',
        temperature: 0,
        iconDescription: 'clear sky',
        iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png'
      },
      {
        date: '2019-10-30',
        temperature: 0,
        iconDescription: 'clear sky',
        iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png'
      },
      {
        date: '2019-10-31',
        temperature: 0,
        iconDescription: 'clear sky',
        iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png'
      }
    ]);
  });

  it('throws error when data for days havent been found', () => {
    const weatherApiResponseWithTooLittleData = {
      list: createWeatherApiListItemFixtures('2019-10-28', '2019-10-29')
    };

    expect(() => {
      transformWeatherApiResponse(
        weatherApiResponseWithTooLittleData as WeatherApiResponse
      );
    }).toThrowError();
  });
});

function createTransformWeatherApiFixture() {
  return {
    list: [
      {
        dt_txt: '2019-10-27 15:00:00',
        main: {
          temp: 1
        },
        weather: [
          {
            icon: '01d',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-27 18:00:00',
        main: {
          temp: 1
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-27 21:00:00',
        main: {
          temp: 1
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 00:00:00',
        main: {
          temp: 0
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 03:00:00',
        main: {
          temp: -3
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 06:00:00',
        main: {
          temp: -2
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 09:00:00',
        main: {
          temp: -1
        },
        weather: [
          {
            icon: '01d',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 12:00:00',
        main: {
          temp: 0
        },
        weather: [
          {
            icon: '01d',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 15:00:00',
        main: {
          temp: 1
        },
        weather: [
          {
            icon: '01d',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 18:00:00',
        main: {
          temp: 2
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      {
        dt_txt: '2019-10-28 21:00:00',
        main: {
          temp: 3
        },
        weather: [
          {
            icon: '01n',
            description: 'clear sky'
          }
        ]
      },
      ...createWeatherApiListItemFixtures('2019-10-29', '2019-11-06')
    ]
  } as Partial<WeatherApiResponse>;
}

function createWeatherApiListItemFixtures(startDate: string, endDate: string) {
  const endDateTime = moment(endDate, 'YYYY-MM-DD');

  const result = [];

  for (
    let i = moment(startDate, 'YYYY-MM-DD');
    !i.isSame(endDateTime);
    i.add(3, 'hours')
  ) {
    const hour = +i.format('H');;

    result.push({
      dt_txt: i.format('YYYY-MM-DD HH:mm:ss'),
      main: {
        temp: 0
      },
      weather: [
        {
          icon: hour > 6 && hour < 18 ? '01d' : '01n',
          description: 'clear sky'
        }
      ]
    });
  }

  return result;
}
