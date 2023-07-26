package com.ojosdgato.ojosdgato.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Address")
public class Address {
	//Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_address", unique=true, nullable=false)
	 private Long id_address;
	@Column(nullable=false)
	 private String alias;
	@Column(nullable=false)
	 private int postcode;
	@Column(nullable=false)
	 private String state;
	@Column(nullable=false)
	 private String municipality;
	@Column(nullable=false)
	 private String city;
	@Column(nullable=false)
	 private String settlement;
	@Column(nullable=false)
	 private String street;
	@Column(nullable=false)
	 private String exterior_number;
	@Column (nullable=true)
	 private String interior_number;
	@Column(nullable=true)
	 private String street1;
	@Column(nullable=true)
	 private String street2;
	@Column(nullable=true)
	 private String instruction;
	 

	//Constructor vacio
	public Address() {}
	
	@OneToOne
	@JoinColumn(name="User_id_user", nullable=true)
	private User user;
	
	//Getters y Setters
	public Long getId_address() {
		return id_address;
	}
	public void setId_address(Long id_address) {
		this.id_address = id_address;
	}
	public String getAlias() {
		return alias;
	}
	public void setAlias(String alias) {
		this.alias = alias;
	}
	public int getPostcode() {
		return postcode;
	}
	public void setPostcode(int postcode) {
		this.postcode = postcode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getMunicipality() {
		return municipality;
	}
	public void setMunicipality(String municipality) {
		this.municipality = municipality;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getSettlement() {
		return settlement;
	}
	public void setSettlement(String settlement) {
		this.settlement = settlement;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getExterior_number() {
		return exterior_number;
	}
	public void setExterior_number(String exterior_number) {
		this.exterior_number = exterior_number;
	}
	public String getInterior_number() {
		return interior_number;
	}
	public void setInterior_number(String interior_number) {
		this.interior_number = interior_number;
	}
	public String getStreet1() {
		return street1;
	}
	public void setStreet1(String street1) {
		this.street1 = street1;
	}
	public String getStreet2() {
		return street2;
	}
	public void setStreet2(String street2) {
		this.street2 = street2;
	}
	public String getInstruction() {
		return instruction;
	}
	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	

}
