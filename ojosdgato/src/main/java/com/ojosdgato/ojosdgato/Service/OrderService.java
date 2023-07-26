package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.Orders;
import com.ojosdgato.ojosdgato.Repository.OrderRepository;

@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepository;
	
	//Obtener Get
	public List<Orders> getAllOrders(){
		return orderRepository.findAll();
	}
	
	//Get by ID
	public Orders getOrderById(Long id) {
		return orderRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Orders createOrder(Orders order) {
		return orderRepository.save(order);
	}
	//Actualiza Put
	public Orders updateOrder(Orders order) {
		return orderRepository.save(order);
	}
	
	//Borrar Delete
	public void deleteOrder(Long id) {
		orderRepository.deleteById(id);
	}
}
