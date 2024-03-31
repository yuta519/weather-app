import Image from "next/image";
import { DropletIcon, SunIcon, WindIcon } from "@/app/weather/components/Icon";
import { Weather } from "@/types/Weather";

export default function CurrentWeather({ weather }: { weather: Weather }) {
  return (
    <section className='p-4 grid gap-4'>
      <div className='flex items-center gap-4'>
        <Image
          alt='Weather icon'
          className='rounded-full'
          height={100}
          src={weather.icon}
          layout='fixed'
          objectFit='cover'
          width={100}
        />
        <div className='grid gap-1.5'>
          <h2 className='text-3xl font-semibold'>
            {weather.temp.max}° / {weather.temp.min}°
          </h2>
          <p className='text-lg font-medium'>{weather.name}</p>
        </div>
      </div>
      <div className='grid gap-1.5'>
        <div className='flex items-center gap-1.5'>
          <DropletIcon className='w-4 h-4 text-gray-500' />
          <p>Humidity: {weather.humidity} %</p>
        </div>
        <div className='flex items-center gap-1.5'>
          <WindIcon className='w-4 h-4 text-gray-500' />
          <p>Wind: {weather.windSpeed} mph</p>
        </div>
        <div className='flex items-center gap-1.5'>
          <SunIcon className='w-4 h-4 text-gray-500' />
          <p>Detail: {weather.description}</p>
        </div>
      </div>
    </section>
  );
}
