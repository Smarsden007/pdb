-- users table 
CREATE TABLE users (
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  full_name varchar(255) not null
  created_at date default current_date
);
ALTER TABLE tasks
DROP COLUMN full_name;

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  fulll_name VARCHAR(25) NOT NULL,
  email VARCHAR(255)  NOT NULL,
  phone VARCHAR(255)  NOT NULL,
  delivery_ad VARCHAR  NOT NULL,
  bouncer VARCHAR NOT NULL,
  rent_date DATE NOT NULL,
  rental_time TIME NOT NULL,
  generator boolean NOT NULL,
  balloons boolean NOT NULL,
  half_arch VARCHAR,
  full_arch VARCHAR,
  vinyl boolean NOT NULL,
  vinyl_theme VARCHAR,
  park boolean NOT NULL,
  cust_nt VARCHAR(650),
  int_nt VARCHAR(650),
  paid boolean,
  deposit boolean,
  contract_sign boolean,
  total_cost DECIMAL,
  created_at date default current_date
);
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  hired_date DATE NOT NULL,
  created_at DATE DEFAULT CURRENT_DATE
);
CREATE TABLE receipts (
  id SERIAL PRIMARY KEY,
  image BYTEA NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at DATE DEFAULT CURRENT_DATE
);
  CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    completed_by INTEGER REFERENCES employees(id),
    posted_by INTEGER REFERENCES employees(id),
    completed_at DATE,
    created_at DATE DEFAULT CURRENT_DATE
  );

INSERT INTO bookings (fulll_name,email,phone,delivery_ad,bouncer,rent_date,rental_time,generator,balloons,half_arch,full_arch,vinyl,vinyl_theme,park) VALUES ('Teddy Rugger','trugg@email.com','54122222','1111 test west', true, '10/10/23', '04:00:00', true, true, true, true, false, false, false);


INSERT INTO bookings (fulll_name, email, phone, delivery_ad, bouncer, rent_date, rental_time, generator, balloons, half_arch, full_arch, vinyl, vinyl_theme, park, cust_nt, int_nt, paid, deposit, contract_sign)
VALUES ('John Smith', 'john@example.com', '123-456-7890', '123 Main Street', 'Bouncer 1', '2022-01-01', '12:00:00', true, true, 'Half Arch', '', false, '', false, '', '', false, false, false),
       ('Jane Doe', 'jane@example.com', '123-456-7890', '456 Main Street', 'Bouncer 2', '2022-01-02', '13:00:00', false, false, '', 'Full Arch', true, 'Vintage', true, '', '', false, false, false),
       ('Bob Johnson', 'bob@example.com', '123-456-7890', '789 Main Street', 'Bouncer 3', '2022-01-03', '14:00:00', true, false, 'Half Arch', 'Full Arch', true, 'Disney', false, '', '', true, false, true);
