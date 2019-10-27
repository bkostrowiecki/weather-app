export type Weather = ForecastForDay[];

export interface ForecastForDay {
  date: string;
  temperature: number;
}
