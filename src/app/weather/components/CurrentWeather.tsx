import Image from "next/image";
import { DropletIcon, WindIcon } from "@/app/weather/components/Icon";

export default function CurrentWeather() {
  return (
    <section className='p-4 grid gap-4'>
      <div className='flex items-center gap-4'>
        <Image
          alt='Weather icon'
          className='rounded-full'
          height={100}
          src='/placeholder.svg'
          layout='fixed'
          objectFit='cover'
          width={100}
        />
        <div className='grid gap-1.5'>
          <h2 className='text-3xl font-semibold'>24°</h2>
          <p className='text-lg font-medium'>Sunny</p>
        </div>
      </div>
      <div className='grid gap-1.5'>
        <div className='flex items-center gap-1.5'>
          <DropletIcon className='w-4 h-4 text-gray-500' />
          <p>Humidity: 10%</p>
        </div>
        <div className='flex items-center gap-1.5'>
          <WindIcon className='w-4 h-4 text-gray-500' />
          <p>Wind: 5 mph</p>
        </div>
      </div>
    </section>
  );
}
