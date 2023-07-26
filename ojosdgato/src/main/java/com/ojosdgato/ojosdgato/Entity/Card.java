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
@Table(name = "Card")
public class Card {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_card", unique=true, nullable=false)
	private Long id_card;
	@Column(nullable=false)
	private String  alias;
	@Column(nullable=false)
	private String holder;
	@Column(nullable=false)
	private Long number;
	@Column(nullable=false)
	private int expiration_month;
	@Column(nullable=false)
	private int expiration_year;
	
	//constructor vacio
	public Card() {
		
	}
	
	@OneToOne
	@JoinColumn(name="User_id_user", nullable=false)
	private User user;
	
	//Getters y Setters
	public Long getId_card() {
		return id_card;
	}
	public void setId_card(Long id_card) {
		this.id_card = id_card;
	}
	public String getAlias() {
		return alias;
	}
	public void setAlias(String alias) {
		this.alias = alias;
	}
	public String getHolder() {
		return holder;
	}
	public void setHolder(String holder) {
		this.holder = holder;
	}
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
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
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
}
