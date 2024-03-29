"use client";

import SearchCity from "@/app/weather/components/SearchCity";
import useCity from "@/hooks/useCity";

export default function Page() {
  const { searchCity, cities } = useCity();

  return (
    <div className='flex flex-col'>
      <main className='flex-1'>
        <SearchCity search={searchCity} />
      </main>
    </div>
  );
}
