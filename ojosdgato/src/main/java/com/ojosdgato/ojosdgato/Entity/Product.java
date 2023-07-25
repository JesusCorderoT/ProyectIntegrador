package com.ojosdgato.ojosdgato.Entity;

import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "Product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_product", unique=true, nullable=false)
	private Long id_product;
	@Column(nullable=false)
	private String name;
	@Column(precision = 10, scale = 2, nullable=false)
	private BigDecimal price;
	@Column(nullable=false)
	private String description;
	@Column(nullable=false)
	private int stock;
	private int rating;
	private String image;
	
	
	public Product() {}
	
	@ManyToMany
    @JoinTable(name = "Product_has_Brand",
            joinColumns = @JoinColumn(name = "Product_id_product"),
            inverseJoinColumns = @JoinColumn(name = "Brand_id_brand"))
    private List<Brand> brands;
	
	@OneToMany(mappedBy = "products")
    private List<ProductOrder> productOrders;


	public Long getId_product() {
		return id_product;
	}

	public void setId_product(Long id_product) {
		this.id_product = id_product;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Brand> getBrands() {
		return brands;
	}

	public void setBrands(List<Brand> brands) {
		this.brands = brands;
	}

	public List<ProductOrder> getProductOrders() {
		return productOrders;
	}

	public void setProductOrders(List<ProductOrder> productOrders) {
		this.productOrders = productOrders;
	}

	@Override
	public String toString() {
		return "Product [id_product=" + id_product + ", name=" + name + ", price=" + price + ", description="
				+ description + ", stock=" + stock + ", rating=" + rating + ", image=" + image + ", brands=" + brands
				+ ", productOrders=" + productOrders + "]";
	}

	

	
}