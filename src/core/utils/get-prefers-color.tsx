import { setCookieClient } from './cookies-client';

export function determineUserTheme(): boolean {
  const html = document.querySelector('html');
  if (!html) return false;

  const isDarkTheme = html.classList.contains('dark');
  const isLightTheme = html.classList.contains('light');

  if (isDarkTheme || isLightTheme) {
    return isDarkTheme;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    html.classList.add('dark');
    setCookieClient('theme', 'dark');
  } else {
    html.classList.remove('dark');
    setCookieClient('theme', 'light');
  }

  return prefersDark;
}
