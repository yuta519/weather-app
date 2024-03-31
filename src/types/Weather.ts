export type Weather = {
  name: WeatherName;
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

export type WeatherName = "Sunny" | "Rain" | "Snow" | "Clouds";
