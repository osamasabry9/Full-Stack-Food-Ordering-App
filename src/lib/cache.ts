// lib/cache.ts
import { unstable_cache as nextCache } from 'next/cache';
import { cache as reactCache } from 'react';

type CacheCallback<T extends unknown[], R> = (...args: T) => Promise<R>;

export function cache<T extends unknown[], R>(
  cb: CacheCallback<T, R>,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] }
) {
  return nextCache(reactCache(cb), keyParts, options);
}
