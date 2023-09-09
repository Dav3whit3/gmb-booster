import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).unique(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});
