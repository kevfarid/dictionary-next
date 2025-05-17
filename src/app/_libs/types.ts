export interface WordResponse {
  word: string;
  phonetic: string;
  phonetics: Array<{
    text: string;
    audio?: string;
  }>;
  origin: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
    }>;
    synonyms: Array<string>;
    antonyms: Array<string>;
  }>;
  sourceUrls: Array<string>;
}

export interface Word {
  word: string;
  phonetic: string;
  audio?: string;
  meanings: Array<{
    definitions: Array<{
      text: string;
    }>;
    synonyms: Array<string>;
    antonyms: Array<string>;
    partOfSpeech: string;
  }>;
  sourceUrl: string;
}
