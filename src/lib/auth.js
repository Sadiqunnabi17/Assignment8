import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database: new Database("./database.db"),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});