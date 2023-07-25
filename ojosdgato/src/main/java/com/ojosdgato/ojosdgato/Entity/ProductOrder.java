package com.ojosdgato.ojosdgato.Entity;


import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ProductOrder")
public class ProductOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_productorder", unique=true, nullable=false)
	private long id_productorder;
	@Column(nullable=false)
	private int quantity;
	
	//Constructor Vacio
	public ProductOrder() {}
	
	@ManyToOne
    @JoinColumn(name = "Product_id_product", nullable = false)
    private Product product;

    @OneToOne(mappedBy = "productOrders")
    private List<Order> orders;
	
	
	 
	public long getId_productorder() {
		return id_productorder;
	}

	public void setId_productorder(long id_productorder) {
		this.id_productorder = id_productorder;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	@Override
	public String toString() {
		return "ProductOrder [id_productorder=" + id_productorder + ", quantity=" + quantity + ", product=" + product
				+ ", orders=" + orders + "]";
	}

	

	
	

	
	
	

	
	 
	
	
}
