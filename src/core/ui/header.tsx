'use client';

import Switch from '@/core/ui/switch';
import { BookA, MoonStar } from 'lucide-react';
import useTheme from '../hooks/use-theme';
import Link from 'next/link';
import SelectFont from './select-font';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className='flex items-center justify-between w-full max-w-4xl'>
      <Link href='/'>
        <BookA
          className='w-8 h-8 text-gray-500 dark:text-gray-100'
          strokeWidth={1}
        />
        <h1 className='hidden'>Dictionary</h1>
      </Link>
      <div className='flex items-center justify-center gap-3'>
        <SelectFont />
        <div className='w-px h-6 bg-gray-200' />
        <div className='flex font-semibold items-center justify-center gap-2'>
          <Switch onChange={toggleTheme} defaultChecked={isDark} />
          <MoonStar className='w-4 h-4 text-slate-400 dark:text-gray-100' />
        </div>
      </div>
    </header>
  );
}
