package com.ojosdgato.ojosdgato.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Brand")
public class Brand {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_brand", unique=true, nullable=false)
	private Long id_brand;
	@Column(nullable=false)
    private String name;
	@Column(nullable=false)
    private String image;
    //constructor vacío
    public Brand() {

    }
    //Relaciones
    @ManyToMany(mappedBy = "brands", cascade = CascadeType.ALL)
	private List<Product> products;
    

	//Getters y Setters
	public Long getId_brand() {
		return id_brand;
	}

	public void setId_brand(Long id_brand) {
		this.id_brand = id_brand;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "Brand [id=" + id_brand + ", name=" + name + ", image=" + image + "]";
	}
	
	
	
}
