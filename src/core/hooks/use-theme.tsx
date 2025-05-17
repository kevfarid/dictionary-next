'use client';

import { setCookieClient } from '@/core/utils/cookies-client';
import { determineUserTheme } from '@/core/utils/get-prefers-color';
import { useState, useEffect, useCallback } from 'react';

export default function UseTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    console.log('toggleTheme');
    const html = document.querySelector('html');
    if (!html) return;

    const theme = html.classList.contains('dark') ? 'light' : 'dark';
    setCookieClient('theme', theme);

    if (theme === 'dark') {
      html.classList.add('dark');
      setIsDark(true);
      return;
    }

    html.classList.remove('dark');
    setIsDark(false);
  };

  const determineIsDark = useCallback(() => {
    const isDark = determineUserTheme();
    setIsDark(isDark);
  }, []);

  useEffect(() => {
    determineIsDark();
  }, [determineIsDark]);

  return { isDark, toggleTheme };
}
