export type Weather = {
  name: WeatherName;
  description: string;
  icon: string;
  temp: {
    min: number;
    max: number;
  };
  humidity: number;
  windSpeed: number;
  dt: number;
  dt_txt: string;
};

export type WeatherName = "Sunny" | "Rain" | "Snow" | "Clouds" | "Clear";
