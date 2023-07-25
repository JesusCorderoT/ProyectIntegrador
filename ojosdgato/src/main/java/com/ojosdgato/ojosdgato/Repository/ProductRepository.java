package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {

}