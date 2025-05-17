import WordSection from '../_libs/ui/word-section';
import Source from '../_libs/ui/source';
import { WordHeader } from '../_libs/ui/word-header';
import { getWord } from '../_libs/services/word';
import SearchLayout from '@/core/layout/search-layout';
import capitalize from '@/core/utils/capitalize';

interface WordPageProps {
  params: Promise<{
    word: string;
  }>;
}

export async function generateMetadata({ params }: WordPageProps) {
  const { word: wordParam } = await params;
  const data = await getWord(wordParam);
  const word = data.word ? capitalize(data.word) : '';

  return {
    title: word ? `${word} - Dictionary` : 'Word not found',
    description: word
      ? `Definition of ${word}: ${data.meanings
          .map((meaning) => meaning.definitions[0].text)
          .join(', ')}`
      : "We couldn't find the word you were looking for.",
  };
}

export default async function WordPage({ params }: WordPageProps) {
  const { word = '' } = await params;
  const data = await getWord(word);

  return (
    <SearchLayout word={word}>
      <article className='flex flex-col gap-4'>
        {data.word ? (
          <>
            <WordHeader
              word={data.word}
              pronunciation={data.phonetic}
              sourceAudio={data.audio}
            />
            <div role='definition' className='flex flex-col gap-8'>
              {data.meanings.map((meaning) => (
                <WordSection
                  key={meaning.partOfSpeech}
                  definitions={meaning.definitions}
                  type={meaning.partOfSpeech}
                  synonyms={meaning.synonyms}
                />
              ))}
            </div>
            <div className='w-full h-px bg-zinc-300' aria-hidden='true' />
            <Source text='Source' url={data.sourceUrl} />
          </>
        ) : (
          <div className='flex flex-col gap-4'>
            <h1 className='text-6xl font-bold text-gray-500'>Word not found</h1>
            <p className='text-lg text-gray-400'>
              We couldn&apos;t find the word you were looking for.
            </p>
          </div>
        )}
      </article>
    </SearchLayout>
  );
}
