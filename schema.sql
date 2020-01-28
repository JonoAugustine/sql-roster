DROP DATABASE IF EXISTS roster_db;

CREATE DATABASE roster_db;

USE roster_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL
  PRIMARY KEY (id)
)

CREATE TABLE employee (
  id INT NOT NULL AUTH_INCREMENT,
  name_first VARCHAR(30) NOT NULL,
  name_last VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
)