package com.ojosdgato.ojosdgato.Entity;

import java.math.BigDecimal;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Service")
public class Services {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_service", unique=true, nullable=false)
	private Long id_service;
	@Column(nullable=false)
	private String name;
	@Column(precision = 10, scale = 2, nullable=false)
	private BigDecimal price;
	@Column(nullable=false)
	private String description;
	@Column(nullable=false)
	private String time;

	
	//Constructor vacio
	public Services() {}

	//Getters y Setters
	public Long getId_service() {
		return id_service;
	}


	public void setId_service(Long id_service) {
		this.id_service = id_service;
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


	public String getTime() {
		return time;
	}


	public void setTime(String time) {
		this.time = time;
	}
	


}