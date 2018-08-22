import {Forecast} from "./forecast";

export class Location {
  id: string;
  name: string;
  woeid: string;
  pubDate: string;
  chill: string;
  humidity: string;
  visibility: string;
  temperature: string;
  text: string;
  forecasts : Forecast[];
  createAt: string;
  updateAt: string;
}
