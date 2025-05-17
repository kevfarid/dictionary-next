import { saveWordToHistory } from '@/app/_libs/services/word';
import Search from '@/app/_libs/ui/search';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

interface SearchLayoutProps {
  word?: string;
  children: ReactNode;
}

export default function SearchLayout({ word, children }: SearchLayoutProps) {
  return (
    <main className='flex flex-col gap-8'>
      <Search
        value={word ?? ''}
        onSearch={async (formData) => {
          'use server';
          const searchQuery = formData.get('searchQuery');
          await saveWordToHistory(searchQuery as string);
          redirect(`/${searchQuery}`);
        }}
        placeholder='Search...'
      />
      {children}
    </main>
  );
}
