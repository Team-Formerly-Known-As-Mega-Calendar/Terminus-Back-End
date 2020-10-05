DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stages CASCADE;
DROP TABLE IF EXISTS stories CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE stages (
  stage_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  choices JSONB NOT NULL,
  img TEXT,
  sound TEXT
);
