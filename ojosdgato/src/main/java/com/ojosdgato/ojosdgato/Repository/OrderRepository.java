package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {

}