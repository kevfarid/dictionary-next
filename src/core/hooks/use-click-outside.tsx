'use client';

import { useEffect, useCallback, RefObject } from 'react';

interface UseClickOutsideProps {
  ref: RefObject<HTMLDivElement> | null;
  onClickOutside: () => void;
}

export default function useClickOutside({
  ref = null,
  onClickOutside,
}: UseClickOutsideProps) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!ref) return;

      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    },
    [ref, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);
}
