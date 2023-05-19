CREATE DATABASE digilizarestaurante;

USE digilizarestaurante;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE reserva (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mesa INT NOT NULL,
  quantidade_pessoas INT NOT NULL,
  data DATE NOT NULL,
  horario TIME NOT NULL,
  comentario VARCHAR(255)
);