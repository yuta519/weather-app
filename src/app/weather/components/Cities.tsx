import { MouseEvent, useRef } from "react";
import { City } from "@/types/City";

type Props = {
  cities: City[];
  onClick: (city: City) => void;
};

export default function Cities({ cities, onClick }: Props) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const city = cities.find(
      (x) => x.lat === Number(e.currentTarget.dataset.lat as string)
    );
    if (!city) return;

    onClick(city);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <section className='p-4 border-t'>
      <ul>
        {cities.map((city) => (
          <li
            key={city.lat}
            className='p-4 border-b hover:bg-gray-300 border-gray-200 cursor-pointer font-semibold text-lg text-gray'
            data-lat={city.lat}
            onClick={handleClick}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
