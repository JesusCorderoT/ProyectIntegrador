package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojosdgato.ojosdgato.Entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}