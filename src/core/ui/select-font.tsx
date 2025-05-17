'use client';
import { ChevronDown } from 'lucide-react';
import { RefObject, useEffect, useRef, useState } from 'react';
import useClickOutside from '../hooks/use-click-outside';
import { setCookieClient } from '@/core/utils/cookies-client';
import useIsClient from '../hooks/use-is-client';

export default function SelectFont() {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState('serif');
  const isClient = useIsClient();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside({
    ref: ref as RefObject<HTMLDivElement>,
    onClickOutside: () => {
      setOpen(false);
    },
  });

  const handleFontChange = (font: string) => {
    const html = document.querySelector('html');
    if (!html) return;

    html.dataset.font = font;
    setFont(font);
    setCookieClient('font', font);
    setOpen(false);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;

    const font = html.dataset.font;

    if (font) {
      setFont(font);
    } else {
      setFont('serif');
    }
  }, [font]);

  return (
    <div className='relative z-10' ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='flex font-semibold items-center justify-center gap-1 capitalize'
      >
        {!isClient ? (
          <div className='w-20 h-3 animate-pulse bg-gray-200 dark:bg-gray-500 rounded-xl' />
        ) : (
          <span>{font}</span>
        )}
        <ChevronDown className='w-6 h-5 text-purple-400' />
      </button>
      {open && (
        <div className='absolute top-10 right-0 w-40 bg-white dark:bg-neutral-800 shadow-lg rounded-md'>
          <ul className='flex flex-col p-2'>
            <li
              onClick={() => handleFontChange('serif')}
              className='p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer'
            >
              Serif
            </li>
            <li
              onClick={() => handleFontChange('sans-serif')}
              className='p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer'
            >
              Sans Serif
            </li>
            <li
              onClick={() => handleFontChange('mono')}
              className='p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer'
            >
              Mono
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
