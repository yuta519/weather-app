import { useMemo, useState } from "react";
import { getHourlyWeatherForecast } from "@/infra/OpenWeather";
import { Weather } from "@/types/Weather";

export default function useWeather() {
  const [weather, setWeather] = useState<Weather[]>([]);

  const currentWeather = useMemo(
    () => (!!weather.length ? weather[0] : null),
    [weather]
  );

  const getWeatherForecast = async (
    lat: number,
    lon: number,
    unit: "celsius" | "fahrenheit" = "celsius"
  ) => {
    const weather = await getHourlyWeatherForecast(lat, lon);
    let result = [...weather];

    if (unit === "celsius") {
      result.map((w) => {
        w.temp.min = convertKtoC(w.temp.min);
        w.temp.max = convertKtoC(w.temp.max);
      });
    }
    setWeather(result);
  };

  return { getWeatherForecast, currentWeather, weather };
}

const convertKtoC = (kelvin: number) => Math.ceil(kelvin - 273.15);
