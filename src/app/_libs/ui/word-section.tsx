interface Definition {
  text: string;
}

interface WordSectionProps {
  type: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

export default function WordSection({
  type,
  definitions,
  synonyms,
  antonyms,
}: WordSectionProps) {
  return (
    <section
      aria-labelledby={`${type}-heading`}
      className='flex flex-col gap-8'
    >
      <h2
        id={`${type}-heading`}
        className='text-lg w-full flex gap-3 items-center font-semibold capitalize'
      >
        {type}
        <div className='w-full h-px bg-zinc-300' aria-hidden='true' />
      </h2>
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold text-lg text-gray-500 dark:text-gray-300'>
          Meaning
        </h3>
        <ul
          role='list'
          aria-label={`${type} definitions`}
          className='list-disc list-inside marker:text-purple-500 pl-6'
        >
          {definitions.map((def, index) => (
            <li key={index}>{def.text}</li>
          ))}
        </ul>
      </div>
      {synonyms && synonyms.length > 0 && (
        <div className='flex items-center gap-6 text-lg font-semibold capitalize'>
          <h3 className='text-gray-500'>Synonyms</h3>
          <p className='text-purple-500'>{synonyms.join(', ')}</p>
        </div>
      )}
      {antonyms && antonyms.length > 0 && (
        <div className='flex items-center gap-6 text-lg font-semibold capitalize'>
          <h3 className='text-gray-500'>Antonyms</h3>
          <p className='text-purple-500'>{antonyms.join(', ')}</p>
        </div>
      )}
    </section>
  );
}
