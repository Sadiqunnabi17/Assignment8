import Database from "better-sqlite3";

const db = new Database("./database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE NOT NULL,
    emailVerified INTEGER DEFAULT 0,
    image TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
  );

  CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    token TEXT UNIQUE NOT NULL,
    expiresAt INTEGER,
    ipAddress TEXT,
    userAgent TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
  );

  CREATE TABLE IF NOT EXISTS account (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    accountId TEXT NOT NULL,
    providerId TEXT NOT NULL,
    accessToken TEXT,
    refreshToken TEXT,
    accessTokenExpiresAt INTEGER,
    refreshTokenExpiresAt INTEGER,
    scope TEXT,
    idToken TEXT,
    password TEXT,
    createdAt INTEGER,
    updatedAt INTEGER
  );

  CREATE TABLE IF NOT EXISTS verification (
    id TEXT PRIMARY KEY,
    identifier TEXT NOT NULL,
    value TEXT NOT NULL,
    expiresAt INTEGER,
    createdAt INTEGER,
    updatedAt INTEGER
  );
`);

console.log("✅ Tables created successfully!");
db.close();