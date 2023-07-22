package com.OjosDeGato.OjosDeGato.Entity;
import java.math.BigDecimal;

public class Service {
	private Long id_Service;
	private String service_name;
	private BigDecimal  service_price;
	private String service_description;
	private String service_time;
	private String service_image;
	//CONSTRUCTOR VACIO PARA JPA
		public Service() {
			
	
}
	public Service(Long id_Service, String service_name, BigDecimal service_price, String service_description,
			String service_time, String service_image) {
		super();
		this.id_Service = id_Service;
		this.service_name = service_name;
		this.service_price = service_price;
		this.service_description = service_description;
		this.service_time = service_time;
		this.service_image = service_image;
	}
	public Long getId_Service() {
		return id_Service;
	}
	public void setId_Service(Long id_Service) {
		this.id_Service = id_Service;
	}
	public String getService_name() {
		return service_name;
	}
	public void setService_name(String service_name) {
		this.service_name = service_name;
	}
	public BigDecimal getService_price() {
		return service_price;
	}
	public void setService_price(BigDecimal service_price) {
		this.service_price = service_price;
	}
	public String getService_description() {
		return service_description;
	}
	public void setService_description(String service_description) {
		this.service_description = service_description;
	}
	public String getService_time() {
		return service_time;
	}
	public void setService_time(String service_time) {
		this.service_time = service_time;
	}
	public String getService_image() {
		return service_image;
	}
	public void setService_image(String service_image) {
		this.service_image = service_image;
	}
	@Override
	public String toString() {
		return "Service [id_Service=" + id_Service + ", service_name=" + service_name + ", service_price="
				+ service_price + ", service_description=" + service_description + ", service_time=" + service_time
				+ ", service_image=" + service_image + "]";
	}
}
