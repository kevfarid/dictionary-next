'use server';
import { cookies } from 'next/headers';

export async function getCookieServer(name: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(name);
  if (cookie) {
    return cookie.value;
  }

  return null;
}

export async function setCookieServer(name: string, value: string) {
  const cookieStore = await cookies();
  cookieStore.set(name, value);
  cookieStore.set('path', '/');
  cookieStore.set('max-age', '31536000');
}
