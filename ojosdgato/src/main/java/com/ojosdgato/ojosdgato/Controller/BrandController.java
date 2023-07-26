package com.ojosdgato.ojosdgato.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojosdgato.ojosdgato.Entity.Brand;
import com.ojosdgato.ojosdgato.Service.BrandService;

@RequestMapping(path="/ojosdgato/brands")
@RestController
public class BrandController {
	
	@Autowired
	private BrandService brandService;
	
	
	public BrandController(BrandService brandService) {
		this.brandService = brandService;
	}
	
	@GetMapping
	public List<Brand> getBrand(){
		return brandService.getAllBrands();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public Brand getBrandById(@PathVariable Long id) {
		return brandService.getBrandById(id);
	}
	
	@PostMapping
	public Brand createBrand(@RequestBody Brand brand) {
		return brandService.createBrand(brand);
	}
	
	//Put
	@PutMapping
	public Brand updateBrand(@RequestBody Brand brand) {
		return brandService.updateBrand(brand);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteBrand(@PathVariable Long id) {
		brandService.deleteBrand(id);
	}
}
