DROP DATABASE IF EXISTS  bankly_carver;
CREATE DATABASE bankly_carver;

\c bankly_carver
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);



DROP DATABASE IF EXISTS  bankly_test_carver;
CREATE DATABASE bankly_test_carver;

\c bankly_test_carver
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);


