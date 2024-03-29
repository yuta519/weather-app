import { FormEvent, useRef } from "react";

export default function SearchCity({
  search,
}: {
  search: (keyword: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current && search(inputRef.current.value);
  };

  return (
    <section className='p-4 border-t'>
      <form
        className='flex items-center justify-center mt-6'
        onSubmit={handleSearch}
      >
        <input
          ref={inputRef}
          type='text'
          placeholder='Search...'
          className='w-full bg-white shadow p-3 rounded outline-none focus:ring-2 focus:ring-indigo-400'
        />
        <button
          type='submit'
          className='ml-4 px-4 py-2 rounded bg-indigo-500 text-white'
        >
          Search
        </button>
      </form>
    </section>
  );
}
