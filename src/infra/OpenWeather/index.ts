import axios, { AxiosError } from "axios";
import { City } from "@/types/City";
import { WeatherResponse } from "@/infra/OpenWeather/types";
import { Weather, WeatherName } from "@/types/Weather";

const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_APIKEY as string;
const url = "https://api.openweathermap.org";

async function getRequest<T>(url: string): Promise<T> {
  try {
    const result = await axios.get(url).then((res) => res.data);
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      throw new Error(
        axiosError.response?.data?.message ??
          "Network error occurred. Please ask service administrator"
      );
    }
    throw new Error("Something went wrong. Please ask service administrator.");
  }
}

export async function getCitiesByName(
  city: string,
  country: string = "",
  limit: number = 10
) {
  return await getRequest<City[]>(
    `${url}/geo/1.0/direct?q=${city},${country}&limit=${limit}&appid=${apiKey}`
  );
}

export async function getHourlyWeatherForecast(lat: number, lon: number) {
  const response = await getRequest<WeatherResponse>(
    `${url}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  const result: Weather[] = response.list.map((weather) => ({
    name: weather.weather[0].main as WeatherName,
    description: weather.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    temp: {
      min: weather.main.temp_min,
      max: weather.main.temp_max,
    },
    humidity: weather.main.humidity,
    windSpeed: weather.wind.speed,
    dt: weather.dt,
    dt_txt: weather.dt_txt,
  }));
  return result;
}
