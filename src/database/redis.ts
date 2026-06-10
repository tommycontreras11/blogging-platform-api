import { createClient, RedisClientType } from "redis"
import { config } from "../config/config"

let client: RedisClientType | null = null;

export const initRedis = async () => {
    client = createClient({ url: config.REDIS_URL, socket: {
        reconnectStrategy: (retries) => Math.min(retries * 50, 2000)
    } });

    client.on("error", (err) => console.log("Redis Client Error", err));

    await client.connect();

    console.log("✅ Redis connected");
};

export const getCacheClient = async (): Promise<RedisClientType> => {
  if (!client) {
    throw new Error("Redis not initialized. Call initRedis() first.");
  }

  return client;
};
