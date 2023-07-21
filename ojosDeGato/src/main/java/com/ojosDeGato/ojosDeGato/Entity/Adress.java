package com.ojosDeGato.ojosDeGato.Entity;

public class Adress {
	//Atributos
	 private Long id_adress;
	 private String alias_adress;
	 private int postcode_adress;
	 private String state_adress;
	 private String municipality_adress;
	 private String city_adress;
	 private String settlement_adress;
	 private String street_adress;
	 private String exterior_number_adress;
	 private String interior_number_adress;
	 private String street1_adress;
	 private String street2_adress;
	 private Long phone_adress;
	 private String instructions_adress;
	 
	//Constructor
	public Adress(Long id_adress, String alias_adress, int postcode_adress, String state_adress,
			String municipality_adress, String city_adress, String settlement_adress, String street_adress,
			String exterior_number_adress, String interior_number_adress, String street1_adress, String street2_adress,
			Long phone_adress, String instructions_adress) {
		super();
		this.id_adress = id_adress;
		this.alias_adress = alias_adress;
		this.postcode_adress = postcode_adress;
		this.state_adress = state_adress;
		this.municipality_adress = municipality_adress;
		this.city_adress = city_adress;
		this.settlement_adress = settlement_adress;
		this.street_adress = street_adress;
		this.exterior_number_adress = exterior_number_adress;
		this.interior_number_adress = interior_number_adress;
		this.street1_adress = street1_adress;
		this.street2_adress = street2_adress;
		this.phone_adress = phone_adress;
		this.instructions_adress = instructions_adress;
	}
	//Constructor vacio
	public Adress() {}

	public Long getId_adress() {
		return id_adress;
	}

	public void setId_adress(Long id_adress) {
		this.id_adress = id_adress;
	}

	public String getAlias_adress() {
		return alias_adress;
	}

	public void setAlias_adress(String alias_adress) {
		this.alias_adress = alias_adress;
	}

	public int getPostcode_adress() {
		return postcode_adress;
	}

	public void setPostcode_adress(int postcode_adress) {
		this.postcode_adress = postcode_adress;
	}

	public String getState_adress() {
		return state_adress;
	}

	public void setState_adress(String state_adress) {
		this.state_adress = state_adress;
	}

	public String getMunicipality_adress() {
		return municipality_adress;
	}

	public void setMunicipality_adress(String municipality_adress) {
		this.municipality_adress = municipality_adress;
	}

	public String getCity_adress() {
		return city_adress;
	}

	public void setCity_adress(String city_adress) {
		this.city_adress = city_adress;
	}

	public String getSettlement_adress() {
		return settlement_adress;
	}

	public void setSettlement_adress(String settlement_adress) {
		this.settlement_adress = settlement_adress;
	}

	public String getStreet_adress() {
		return street_adress;
	}

	public void setStreet_adress(String street_adress) {
		this.street_adress = street_adress;
	}

	public String getExterior_number_adress() {
		return exterior_number_adress;
	}

	public void setExterior_number_adress(String exterior_number_adress) {
		this.exterior_number_adress = exterior_number_adress;
	}

	public String getInterior_number_adress() {
		return interior_number_adress;
	}

	public void setInterior_number_adress(String interior_number_adress) {
		this.interior_number_adress = interior_number_adress;
	}

	public String getStreet1_adress() {
		return street1_adress;
	}

	public void setStreet1_adress(String street1_adress) {
		this.street1_adress = street1_adress;
	}

	public String getStreet2_adress() {
		return street2_adress;
	}

	public void setStreet2_adress(String street2_adress) {
		this.street2_adress = street2_adress;
	}

	public Long getPhone_adress() {
		return phone_adress;
	}

	public void setPhone_adress(Long phone_adress) {
		this.phone_adress = phone_adress;
	}

	public String getInstructions_adress() {
		return instructions_adress;
	}

	public void setInstructions_adress(String instructions_adress) {
		this.instructions_adress = instructions_adress;
	}
	 
	
	
	 
	 
}
