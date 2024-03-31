import { fromUnixTime } from "date-fns";
import { CloudIcon, DropletIcon, SunIcon } from "@/app/weather/components/Icon";
import { Weather, WeatherName } from "@/types/Weather";

export default function HourlyWeatherForecast({
  hourlyWeather,
}: {
  hourlyWeather: Weather[];
}) {
  return (
    <section className='p-4 border-t border-b'>
      <div className='container mx-auto flex overflow-x-auto items-center gap-4 p-4'>
        {hourlyWeather.map((weather, index) => (
          <div key={index} className='flex flex-col items-center gap-1.5 w-96'>
            <Icon weatherName={weather.name} />
            <p className='text-sm font-medium'>
              {(weather.temp.max + weather.temp.max) / 2}°
            </p>
            <p className='text-sm font-medium'>
              {fromUnixTime(weather.dt).getMonth() + 1}/
              {fromUnixTime(weather.dt).getDate()}
            </p>
            <p className='text-sm font-medium'>
              {fromUnixTime(weather.dt).getHours()}:00
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const Icon = ({ weatherName }: { weatherName: WeatherName }) => {
  switch (weatherName) {
    case "Sunny":
      return <SunIcon className='w-6 h-6' />;
    case "Clear":
      return <SunIcon className='w-6 h-6' />;
    case "Rain":
      return <DropletIcon className='w-6 h-6' />;
    // TODO
    // case "Snow":
    //   return <SnowIcon className='w-6 h-6' />;
    case "Clouds":
      return <CloudIcon className='w-6 h-6' />;
    default:
      return null;
  }
};
