import { getCacheClient } from "../database/redis";

const getCache = async <T>(key: string): Promise<T | null> => {
  const redis = await getCacheClient();

  const value = await redis.get(key);

  if (!value) return null;

  return JSON.parse(value) as T;
};

const setCache = async (
  key: string,
  value: unknown,
  ttl: number
): Promise<void> => {
  const redis = await getCacheClient();

  await redis.set(key, JSON.stringify(value), {
    EX: ttl,
  });
};

const deleteCache = async (key: string) => {
    const redis = await getCacheClient()
    await redis.del(key)
} 

export const cache = {
  get: getCache,
  set: setCache,
  delete: deleteCache
};