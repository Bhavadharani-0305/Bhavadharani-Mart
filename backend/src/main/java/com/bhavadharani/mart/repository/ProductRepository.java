package com.bhavadharani.mart.repository;

import com.bhavadharani.mart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}