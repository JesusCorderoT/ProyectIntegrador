package com.OjosDeGato.OjosDeGato.Entity;
import java.math.BigDecimal;

public class Product {
	private Long id_product;
	private String name_product;
	private BigDecimal price_product;
	private String description_product;
	private int stock_product;
	private String image_product;
	
	
	public Product() {
		
	}
	
	
	public Product(Long id_product, String name_product, BigDecimal price_product, String description_product,
			int stock_product, String image_product) {
		super();
		this.id_product = id_product;
		this.name_product = name_product;
		this.price_product = price_product;
		this.description_product = description_product;
		this.stock_product = stock_product;
		this.image_product = image_product;
	}


	public Long getId_product() {
		return id_product;
	}


	public void setId_product(Long id_product) {
		this.id_product = id_product;
	}


	public String getName_product() {
		return name_product;
	}


	public void setName_product(String name_product) {
		this.name_product = name_product;
	}


	public BigDecimal getPrice_product() {
		return price_product;
	}


	public void setPrice_product(BigDecimal price_product) {
		this.price_product = price_product;
	}


	public String getDescription_product() {
		return description_product;
	}


	public void setDescription_product(String description_product) {
		this.description_product = description_product;
	}


	public int getStock_product() {
		return stock_product;
	}


	public void setStock_product(int stock_product) {
		this.stock_product = stock_product;
	}


	public String getImage_product() {
		return image_product;
	}


	public void setImage_product(String image_product) {
		this.image_product = image_product;
	}


	@Override
	public String toString() {
		return "Product [id_product=" + id_product + ", name_product=" + name_product + ", price_product="
				+ price_product + ", description_product=" + description_product + ", stock_product=" + stock_product
				+ ", image_product=" + image_product + "]";
	}
}
