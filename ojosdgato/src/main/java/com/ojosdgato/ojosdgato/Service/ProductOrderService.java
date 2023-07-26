package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.ProductOrder;
import com.ojosdgato.ojosdgato.Repository.ProductOrderRepository;

@Service
public class ProductOrderService {
	@Autowired
	private ProductOrderRepository productOrderRepository;
	
	//Obtener Get
	public List<ProductOrder> getAllProductOrders(){
		return productOrderRepository.findAll();
	}
	
	//Get by ID
	public ProductOrder getProductOrderById(Long id) {
		return productOrderRepository.findById(id).orElse(null);
	}
	//Crear Post
	public ProductOrder createProductOrder(ProductOrder productOrder) {
		return productOrderRepository.save(productOrder);
	}
	//Actualiza Put
	public ProductOrder updateProductOrder(ProductOrder productOrder) {
		return productOrderRepository.save(productOrder);
	}
	
	//Borrar Delete
	public void deleteProductOrder(Long id) {
		productOrderRepository.deleteById(id);
	}
}
