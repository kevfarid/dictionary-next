export function setCookieClient(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
}

export function getCookieClient(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
}
