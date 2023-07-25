package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Brand;
import com.ojosdgato.ojosdgato.Repository.BrandRepository;

public class BrandService {
	@Autowired
	private BrandRepository brandRepository;
	
	//Obtener Get
	public List<Brand> getAllBrands(){
		return brandRepository.findAll();
	}
	
	//Get by ID
	public Brand getBrandById(Long id) {
		return brandRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Brand createBrand(Brand brand) {
		return brandRepository.save(brand);
	}
	//Actualiza Put
	public Brand updateBrand(Brand brand) {
		return brandRepository.save(brand);
	}
	
	//Borrar Delete
	public void deleteBrand(Long id) {
		brandRepository.deleteById(id);
	}
}
