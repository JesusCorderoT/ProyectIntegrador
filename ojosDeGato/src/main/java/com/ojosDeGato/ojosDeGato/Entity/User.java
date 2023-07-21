package com.ojosDeGato.ojosDeGato.Entity;

public class User {
	
	private Long id_user;
	private String lastname_user;
	private String email_user;
	private Long phone_user;
	private String username_user;
	private String password_user;
	private int type_user;

	//Constructor vacio
public User() {
		
	}

	//Constructor
public User(Long id_user, String lastname_user, String email_user, Long phone_user, String username_user,
		String password_user, int type_user) {
	super();
	this.id_user = id_user;
	this.lastname_user = lastname_user;
	this.email_user = email_user;
	this.phone_user = phone_user;
	this.username_user = username_user;
	this.password_user = password_user;
	this.type_user = type_user;
}

	//G&S
public Long getId_user() {
	return id_user;
}

public void setId_user(Long id_user) {
	this.id_user = id_user;
}

public String getLastname_user() {
	return lastname_user;
}

public void setLastname_user(String lastname_user) {
	this.lastname_user = lastname_user;
}

public String getEmail_user() {
	return email_user;
}

public void setEmail_user(String email_user) {
	this.email_user = email_user;
}

public Long getPhone_user() {
	return phone_user;
}

public void setPhone_user(Long phone_user) {
	this.phone_user = phone_user;
}

public String getUsername_user() {
	return username_user;
}

public void setUsername_user(String username_user) {
	this.username_user = username_user;
}

public String getPassword_user() {
	return password_user;
}

public void setPassword_user(String password_user) {
	this.password_user = password_user;
}

public int getType_user() {
	return type_user;
}

public void setType_user(int type_user) {
	this.type_user = type_user;
}


//ToString
@Override
public String toString() {
	return "User [id_user=" + id_user + ", lastname_user=" + lastname_user + ", email_user=" + email_user
			+ ", phone_user=" + phone_user + ", username_user=" + username_user + ", password_user=" + password_user
			+ ", type_user=" + type_user + "]";
}

	

	
	
	
	
	
	
	
}
