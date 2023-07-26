package com.ojosdgato.ojosdgato.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

	
	
}
