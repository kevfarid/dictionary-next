import ButtonSound from './button-sound';

interface WordHeaderProps {
  word: string;
  pronunciation: string;
  sourceAudio?: string;
}

export function WordHeader({
  word,
  pronunciation,
  sourceAudio,
}: WordHeaderProps) {
  return (
    <section className='flex items-center justify-between'>
      <hgroup className='flex flex-col gap-1'>
        <h1 className='text-6xl font-bold capitalize'>{word}</h1>
        <p
          aria-label='pronunciation'
          role='doc-subtitle'
          className='text-purple-500 text-xl font-medium'
        >
          {pronunciation}
        </p>
      </hgroup>
      {sourceAudio && <ButtonSound audioUrl={sourceAudio} />}
    </section>
  );
}
