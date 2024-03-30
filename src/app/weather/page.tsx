"use client";

import { useRouter } from "next/navigation";
import SearchCity from "@/app/weather/components/SearchCity";
import Cities from "@/app/weather/components/Cities";
import useCity from "@/hooks/useCity";
import { City } from "@/types/City";

export default function Page() {
  const router = useRouter();
  const { searchCity, cities } = useCity();

  const handleClick = (city: City) => {
    router.push(
      `/weather/${city.country}/${city.name}?lat=${city.lat}&lon=${city.lon}`
    );
  };

  return (
    <div className='flex flex-col'>
      <main className='flex-1'>
        <SearchCity search={searchCity} />
        {!!cities.length && <Cities cities={cities} onClick={handleClick} />}
      </main>
    </div>
  );
}
