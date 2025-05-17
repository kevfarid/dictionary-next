import Link from 'next/link';

interface Props {
  list: {
    word: string;
    date: string;
  }[];
}

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export default function History({ list }: Props) {
  return (
    <section
      aria-labelledby={`history-heading`}
      className='flex flex-col gap-8'
    >
      <h2
        id={`history-heading`}
        className='text-lg w-full flex gap-3 items-center font-semibold capitalize'
      >
        <span className='w-fit whitespace-nowrap'>Last searched word</span>
        <div className='w-full h-px bg-zinc-300' aria-hidden='true' />
      </h2>
      <div className='flex flex-col gap-2'>
        <ul
          role='list'
          aria-label='last searched words'
          className='list-disc list-inside marker:text-purple-500 pl-6'
        >
          {list.map((item, index) => (
            <li key={index} className='capitalize'>
              <Link href={`/${item.word}`}>
                <span className='font-bold'>{item.word}</span> - Last searched
                on {formatDate(item.date)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
