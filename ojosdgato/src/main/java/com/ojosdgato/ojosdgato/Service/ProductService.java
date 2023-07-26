package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.Product;
import com.ojosdgato.ojosdgato.Repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	//Obtener Get
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	//Get by ID
	public Product getProductById(Long id) {
		return productRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}
	//Actualiza Put
	public Product updateProduct(Product product) {
		return productRepository.save(product);
	}
	
	//Borrar Delete
	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
}

