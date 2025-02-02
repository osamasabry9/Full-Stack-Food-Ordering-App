import { unstable_cache as nextCache } from 'next/cache';
import { cache as reactCache } from 'react';

type CacheCallback = (...args: unknown[]) => Promise<unknown>;


export function cache<T extends CacheCallback>(
  callback: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] }
) {
  return nextCache(reactCache(callback), keyParts, options);
}
