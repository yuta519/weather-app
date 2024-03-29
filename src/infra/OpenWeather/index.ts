import axios, { AxiosError } from "axios";
import { City } from "@/types/City";

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
  // return await getRequest<City[]>(
  return await getRequest<City[]>(
    `${url}/geo/1.0/direct?q=${city},${country}&limit=${limit}&appid=${apiKey}`
  );
}

// public async getWeatherByLatAndLon(
//   lat: number,
//   lon: number
// ): Promise<Weather> {
//   const url = `${this.url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
//   const response = await this.getRequest<WeatherResponse>(url);
//   const weather: Weather = {
//     name: response.name,
//     main: response.weather[0].main,
//     description: response.weather[0].main,
//     icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
//     temperature: {
//       avg: response.main.temp,
//       feelsLike: response.main.feels_like,
//       min: response.main.temp_min,
//       max: response.main.temp_max,
//     },
//     pressure: response.main.pressure,
//     humidity: response.main.humidity,
//   };
//   return weather;
// }

export async function getHourlyWeatherForecast(lat: number, lon: number) {
  return await getRequest<any[]>(
    `${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
}
