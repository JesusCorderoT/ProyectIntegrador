package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.ProductOrder;


public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long> {

}