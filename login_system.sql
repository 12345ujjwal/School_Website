CREATE DATABASE login_system;
USE login_system;
CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(25) NOT NULL
);
INSERT INTO users(username,password)
values ('ujjwal23','123');
