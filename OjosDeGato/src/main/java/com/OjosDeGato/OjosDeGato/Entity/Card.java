package com.OjosDeGato.OjosDeGato.Entity;

public class Card {
	private Long id_tarjeta;
	private String  card_alias;
	private String card_holder;
	private Long card_number;
	private int expiration_month;
	private int expiration_year;
	private int cvv;
	//constructor vacÃ­o
	public Card() {
		
	}
	//constructor
	public Card(Long id_tarjeta, String card_alias, String card_holder, Long card_number, int expiration_month,
			int expiration_year, int 	cvv) {
		super();
		this.id_tarjeta = id_tarjeta;
		this.card_alias = card_alias;
		this.card_holder = card_holder;
		this.card_number = card_number;
		this.expiration_month = expiration_month;
		this.expiration_year = expiration_year;
		this.cvv = cvv;
	}
	//getters & setters
	
	public Long getId_tarjeta() {
		return id_tarjeta;
	}
	public void setId_tarjeta(Long id_tarjeta) {
		this.id_tarjeta = id_tarjeta;
	}
	public String getCard_alias() {
		return card_alias;
	}
	public void setCard_alias(String card_alias) {
		this.card_alias = card_alias;
	}
	public String getCard_holder() {
		return card_holder;
	}
	public void setCard_holder(String card_holder) {
		this.card_holder = card_holder;
	}
	public Long getCard_number() {
		return card_number;
	}
	public void setCard_number(Long card_number) {
		this.card_number = card_number;
	}
	public int getExpiration_month() {
		return expiration_month;
	}
	public void setExpiration_month(int expiration_month) {
		this.expiration_month = expiration_month;
	}
	public int getExpiration_year() {
		return expiration_year;
	}
	public void setExpiration_year(int expiration_year) {
		this.expiration_year = expiration_year;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	
	//toString
	
	@Override
	public String toString() {
		return "Card [id_tarjeta=" + id_tarjeta + ", card_alias=" + card_alias + ", card_holder=" + card_holder
				+ ", card_number=" + card_number + ", expiration_month=" + expiration_month + ", expiration_year="
				+ expiration_year + ", cvv=" + cvv + "]";
	}
	

}
