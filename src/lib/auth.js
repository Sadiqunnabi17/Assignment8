import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import Database from "better-sqlite3";

const isProd = process.env.NODE_ENV === "production";

let database;

if (isProd) {
  const client = new MongoClient(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
  });
  await client.connect();
  const db = client.db("skillsphere");
  database = mongodbAdapter(db, { client });
} else {
  database = new Database("./database.db");
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  database,
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});