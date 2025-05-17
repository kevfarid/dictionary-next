import { SearchIcon } from 'lucide-react';

interface SearchProps {
  onSearch: (formData: FormData) => Promise<void>;
  placeholder?: string;
  className?: string;
  value?: string;
}

export default function Search({
  onSearch,
  placeholder = 'Search...',
  className = '',
  value,
}: SearchProps) {
  return (
    <form
      action={onSearch}
      role='search'
      className={`relative flex items-center justify-center w-full max-w-4xl ${className}`}
    >
      <label htmlFor='search-input' className='sr-only'>
        Search
      </label>
      <input
        defaultValue={value}
        name='searchQuery'
        type='search'
        id='search-input'
        placeholder={placeholder}
        aria-label='Search'
        className='w-full h-16 pl-6 pr-12 rounded-2xl dark:bg-neutral-700 dark:text-gray-100 dark:placeholder:text-gray-300 bg-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300'
      />
      <button
        type='submit'
        aria-label='Search'
        className='absolute top-1/2 right-4 -translate-y-1/2'
      >
        <SearchIcon className='text-purple-400' />
      </button>
    </form>
  );
}
