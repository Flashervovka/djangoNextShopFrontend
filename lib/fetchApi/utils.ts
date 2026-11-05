import { cacheLife } from 'next/cache';

const API_URL = process.env.API_URL ?? 'http://localhost:8000/api/';
const cacheEnabled = process.env.API_CACHE !== 'off';

async function cachedGet<T>(path: string): Promise<T> {
  'use cache';
  cacheLife('minutes');

  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status} on ${path}`);
  return res.json();
}

async function rawGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status} on ${path}`);
  return res.json();
}

export const get: <T>(path: string) => Promise<T> = cacheEnabled ? cachedGet : rawGet;
