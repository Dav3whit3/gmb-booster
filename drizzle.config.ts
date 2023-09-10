import type { Config } from "drizzle-kit";
import { loadEnv } from "vite";
const { env } = process;

const { POSTGRES_PASSWORD } = loadEnv(env.POSTGRES_PASSWORD as string, process.cwd(), "");
const { POSTGRES_HOST } = loadEnv(env.POSTGRES_HOST as string, process.cwd(), "");
const { POSTGRES_DATABASE } = loadEnv(env.POSTGRES_DATABASE as string, process.cwd(), "");
const { POSTGRES_USER } = loadEnv(env.POSTGRES_USER as string, process.cwd(), "");

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    host: POSTGRES_HOST,
    database: POSTGRES_DATABASE,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    ssl: true,
  },
} satisfies Config;
