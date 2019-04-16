CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT,
    photo_url TEXT
);

CREATE TABLE IF NOT EXISTS properties (
    id SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    photo_url TEXT,
    rental_mth MONEY, 
    day_credit INTEGER,
    bank_name TEXT,
    user_id INTEGER
);