CREATE DATABASE IF NOT EXISTS bhavadharani_mart;

USE bhavadharani_mart;

CREATE TABLE IF NOT EXISTS products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DOUBLE NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(500)
);