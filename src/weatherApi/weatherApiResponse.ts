export interface WeatherApiResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherApiListItem[];
  city: WeatherApiCity;
}

export interface WeatherApiListItem {
  dt: number;
  main: WeatherApiMainData;
  weather: WeatherApiDescriptiveData[];
  clouds: WeatherApiClouds;
  wind: WeatherApiWind;
  sys: WeatherApiSys;
  dt_txt: string;
  rain: WeatherApiRain;
  snow: WeatherApiSnow;
}

export interface WeatherApiCity {
  id: number;
  name: string;
  coord: WeatherApiCoord;
  country: string;
}

export interface WeatherApiMainData {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherApiDescriptiveData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherApiClouds {
  all: number;
}

export interface WeatherApiWind {
  speed: number;
  deg: number;
}

export interface WeatherApiSys {
  pod: string;
}

export interface WeatherApiRain {
  '3h': number;
}

export interface WeatherApiSnow {
  '3h': number;
}

export interface WeatherApiCoord {
  lat: number;
  lon: number;
}
