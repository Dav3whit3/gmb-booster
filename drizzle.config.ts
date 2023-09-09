import type { Config } from "drizzle-kit";
import { loadEnv } from "vite";
const { POSTGRES_URL } = loadEnv(process.env.POSTGRES_URL as string, process.cwd(), "");

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: `${POSTGRES_URL}?ssl=true`
  },
} satisfies Config;
