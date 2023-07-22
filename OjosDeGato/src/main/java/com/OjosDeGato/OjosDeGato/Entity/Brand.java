package com.OjosDeGato.OjosDeGato.Entity;

public class Brand {
	 	private Long id_brand;
	    private String brand_name;
	    private String brand_image;
	    //constructor vacío
	    public Brand() {

	    }
	    //constructor
	    public Brand(Long id_brand, String brand_name, String brand_image) {
	        super();
	        this.id_brand = id_brand;
	        this.brand_name = brand_name;
	        this.brand_image = brand_image;
	    }
	    //getters & setters
	    public Long getId_brand() {
	        return id_brand;
	    }
	    public void setId_brand(Long id_brand) {
	        this.id_brand = id_brand;
	    }
	    public String getBrand_name() {
	        return brand_name;
	    }
	    public void setBrand_name(String brand_name) {
	        this.brand_name = brand_name;
	    }
	    public String getBrand_image() {
	        return brand_image;
	    }
	    public void setBrand_image(String brand_image) {
	        this.brand_image = brand_image;
	    }
	    //toString
	    @Override
	    public String toString() {
	        return "Brand [id_brand=" + id_brand + ", brand_name=" + brand_name + ", brand_image=" + brand_image + "]";
	    }

}
