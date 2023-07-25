package com.ojosdgato.ojosdgato.Entity;

import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Service")
public class Service {
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
	private String image;
	
	//Constructor vacio
	public Service() {}
	
	@ManyToMany(mappedBy = "appointments")
	private List<Appointment> appointments;
	
	@ManyToMany(mappedBy = "serviceOrders")
	private List<ServiceOrder> serviceOrders;
	
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public List<ServiceOrder> getServiceOrders() {
		return serviceOrders;
	}

	public void setServiceOrders(List<ServiceOrder> serviceOrders) {
		this.serviceOrders = serviceOrders;
	}

	@Override
	public String toString() {
		return "Service [id_service=" + id_service + ", name=" + name + ", price=" + price + ", description="
				+ description + ", time=" + time + ", image=" + image + ", appointments=" + appointments
				+ ", serviceOrders=" + serviceOrders + "]";
	}

	
	
	

}