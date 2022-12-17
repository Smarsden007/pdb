-- users table 
CREATE TABLE users (
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  created_at date default current_date
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  fulll_name VARCHAR(25) NOT NULL,
  email VARCHAR(255)  NOT NULL,
  phone VARCHAR(255)  NOT NULL,
  delivery_ad VARCHAR  NOT NULL,
  bouncer boolean NOT NULL,
  rent_date DATE NOT NULL,
  rental_time TIME NOT NULL,
  generator boolean NOT NULL,
  balloons boolean NOT NULL,
  half_arch boolean,
  full_arch boolean,
  vinyl boolean NOT NULL,
  vinyl_theme boolean,
  park boolean NOT NULL,
  cust_nt VARCHAR(650),
  int_nt VARCHAR(650),
  paid boolean,
  deposit boolean,
  contract_sign boolean,
  created_at date default current_date
);

INSERT INTO bookings (fulll_name,email,phone,delivery_ad,bouncer,rent_date,rental_time,generator,balloons,half_arch,full_arch,vinyl,vinyl_theme,park) VALUES ('Tom','bob@email.com','54122222','1111 test west', true, '10/10/23', '01:00:00', true, true, true, true, false, false, false);