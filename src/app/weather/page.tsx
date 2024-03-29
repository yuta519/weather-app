import Image from "next/image";
import { AccordionItem, Accordion } from "@/components/ui/accordion";
import {
  CloudIcon,
  DropletIcon,
  SunIcon,
  WindIcon,
} from "@/app/weather/components/Icon";

export default function Page() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='p-4 border-b'>
        <div className='container mx-auto'>
          <div className='flex items-center gap-4'>
            <SunIcon className='w-8 h-8 text-amber-500' />
            <h1 className='text-2xl font-semibold'>Weather</h1>
          </div>
        </div>
      </header>
      <main className='flex-1'>
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
        <section className='p-4 border-t border-b'>
          <div className='container mx-auto flex overflow-x-auto items-center gap-4 p-4'>
            <div className='flex flex-col items-center gap-1.5'>
              <SunIcon className='w-6 h-6' />
              <p className='text-sm font-medium'>72° / 55°</p>
            </div>
            <div className='flex flex-col items-center gap-1.5'>
              <CloudIcon className='w-6 h-6' />
              <p className='text-sm font-medium'>65° / 48°</p>
            </div>
            <div className='flex flex-col items-center gap-1.5'>
              <CloudIcon className='w-6 h-6' />
              <p className='text-sm font-medium'>68° / 51°</p>
            </div>
            <div className='flex flex-col items-center gap-1.5'>
              <CloudIcon className='w-6 h-6' />
              <p className='text-sm font-medium'>70° / 53°</p>
            </div>
            <div className='flex flex-col items-center gap-1.5'>
              <SunIcon className='w-6 h-6' />
              <p className='text-sm font-medium'>75° / 60°</p>
            </div>
          </div>
        </section>
        <section className='p-4'>
          <Accordion type='multiple'>
            <AccordionItem value='0'>
              <div>Hourly Forecast</div>
              <div>
                <div className='grid gap-4 p-4'>
                  <div className='flex items-center justify-between'>
                    <p>Now</p>
                    <p>24°</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>1pm</p>
                    <p>26°</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>2pm</p>
                    <p>27°</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>3pm</p>
                    <p>27°</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p>4pm</p>
                    <p>26°</p>
                  </div>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem value='1'>
              <div>Detailed Weather</div>
              <div>
                <p>It&apos;s going to be a sunny day with clear skies.</p>
              </div>
            </AccordionItem>
            <AccordionItem value='2'>
              <div>Advice</div>
              <div>
                <p>Remember to stay hydrated and wear sunscreen.</p>
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
      <footer className='p-4 border-t'>
        <div className='container mx-auto text-center text-sm text-gray-500 dark:text-gray-400'>
          <p>
            Powered by the OpenWeather API. Background images from Unsplash.
          </p>
        </div>
      </footer>
    </div>
  );
}
