import {ConsolidatedWeather} from './ConsolidatedWeather';

export class Weather {
  woeid: number;
  location_type: string;
  title: string;
  latt_long: string;

  timezone: string;
  timezone_name: string;

  sun_set: string;
  sun_rise: string;
  time: string;

  parent: {
    title: string,
    location_type: string,
    woeid: number,
    latt_long: string
  };

  consolidated_weather: Array<ConsolidatedWeather>;
}
