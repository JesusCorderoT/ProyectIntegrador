package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Order;
import com.ojosdgato.ojosdgato.Repository.OrderRepository;

public class OrderService {
	@Autowired
	private OrderRepository orderRepository;
	
	//Obtener Get
	public List<Order> getAllOrders(){
		return orderRepository.findAll();
	}
	
	//Get by ID
	public Order getOrderById(Long id) {
		return orderRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Order createOrder(Order order) {
		return orderRepository.save(order);
	}
	//Actualiza Put
	public Order updateOrder(Order order) {
		return orderRepository.save(order);
	}
	
	//Borrar Delete
	public void deleteOrder(Long id) {
		orderRepository.deleteById(id);
	}
}
