package com.ojosdgato.ojosdgato.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojosdgato.ojosdgato.Entity.Product;
import com.ojosdgato.ojosdgato.Entity.ProductOrder;
import com.ojosdgato.ojosdgato.Service.ProductOrderService;
import com.ojosdgato.ojosdgato.Service.ProductService;

@RequestMapping(path="/ojosdgato/productorders")
@RestController
public class ProductOrderController {
	
	private ProductOrderService productorderService;
	private ProductService productService;
	
	@Autowired
	public ProductOrderController(ProductOrderService productorderService, ProductService productService) {
		super();
		this.productorderService = productorderService;
		this.productService = productService;
	}
	
	@GetMapping
	public List<ProductOrder> getProductOrder(){
		return productorderService.getAllProductOrders();
	}

	//Get individual
	@GetMapping("/{id}")
	public ProductOrder getProductOrderById(@PathVariable Long id) {
		return productorderService.getProductOrderById(id);
	}
	
	@PostMapping
	public ProductOrder createProductOrder(@RequestBody ProductOrder productorder) {
		//Encontrar un producto que haga match en bd
		Product persistentProduct=productService.getProductById(productorder.getProduct().getId_product());
		productorder.setProduct(persistentProduct);
		return productorderService.createProductOrder(productorder);
	}
	
	//Put
	@PutMapping
	public ProductOrder updateProductOrder(@RequestBody ProductOrder productorder) {
		return productorderService.updateProductOrder(productorder);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteProductOrder(@PathVariable Long id) {
		productorderService.deleteProductOrder(id);
	}
}
