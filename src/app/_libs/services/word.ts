import { getCookieServer, setCookieServer } from '@/core/utils/cookies-server';
import { Word, WordResponse } from '../types';

export async function getWord(work: string) {
  const resp = fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${work}`,
    {
      next: { revalidate: 60 },
    }
  )
    .then((res) => {
      if (!res.ok) {
        return Promise.resolve([]);
      }
      return res.json();
    })
    .then<Word>((data: WordResponse[]) => {
      const word = data[0];
      if (!word) {
        return Promise.resolve({} as Word);
      }
      const phonetic = word.phonetic;
      const audio = word.phonetics[0].audio;
      const meanings = word.meanings.map(
        (meaning: WordResponse['meanings'][0]) => ({
          definitions: meaning.definitions.map((def) => ({
            text: def.definition,
          })),
          synonyms: meaning.synonyms,
          antonyms: meaning.antonyms,
          partOfSpeech: meaning.partOfSpeech,
        })
      );

      const sourceUrl = word.sourceUrls[0];

      return {
        word: word.word,
        phonetic,
        audio,
        meanings,
        sourceUrl,
      };
    });

  return resp;
}

export async function saveWordToHistory(word: string) {
  const history = await getCookieServer('history');
  if (!history) {
    setCookieServer(
      'history',
      JSON.stringify([
        {
          word,
          date: new Date().toISOString(),
        },
      ])
    );
    return;
  }

  const parsedHistory = JSON.parse(history);
  const newHistory = [
    {
      word,
      date: new Date().toISOString(),
    },
    ...parsedHistory,
  ].slice(0, 10);

  setCookieServer('history', JSON.stringify(newHistory));
  return;
}

export async function getWordHistory() {
  const history = await getCookieServer('history');
  if (!history) {
    return [];
  }

  const parsedHistory = JSON.parse(history);
  return parsedHistory;
}
