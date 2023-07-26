package com.ojosdgato.ojosdgato.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Appointment")
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_appointment", unique=true, nullable=false)
	private Long id_appointment;
	@Column(nullable=false)
	private String date;
	@Column(nullable=false)
	private String hour;
	@Column(nullable=false)
	private String name;
	@Column(nullable=false)
	private int status;
	
	//Constructor vacio
	public Appointment(){}
	
	//Definimos relaciones
		@ManyToOne
		@JoinColumn(name="Service_id_service", nullable=false)
		private Services service;
		
		@ManyToOne
		@JoinColumn(name="User_id_user", nullable=false)
		private User user;
	
	//Getters y Setters
	public Long getId_appointment() {
		return id_appointment;
	}
	public void setId_appointment(Long id_appointment) {
		this.id_appointment = id_appointment;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getHour() {
		return hour;
	}
	public void setHour(String hour) {
		this.hour = hour;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Services getService() {
		return service;
	}
	public void setService(Services service) {
		this.service = service;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
