"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CurrentWeather from "@/app/weather/components/CurrentWeather";
import useWeather from "@/hooks/useWeather";
import HourlyWeatherForecast from "../../components/HourlyWeatherForecast";

type Props = {
  params: { country: string; city: string };
};

export default function Page({ params }: Props) {
  const searchParams = useSearchParams();
  const lat = Number(searchParams.get("lat") as string);
  const lon = Number(searchParams.get("lon") as string);

  const { getWeatherForecast, currentWeather, weather } = useWeather();

  useEffect(() => {
    (async () => await getWeatherForecast(lat, lon))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='flex-1'>
      <h1 className='text-2xl font-bold'>
        {params.city} ({params.country})
      </h1>
      {currentWeather && <CurrentWeather weather={currentWeather} />}
      <HourlyWeatherForecast hourlyWeather={weather} />
    </main>
  );
}
