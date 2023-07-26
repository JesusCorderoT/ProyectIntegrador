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

import com.ojosdgato.ojosdgato.Entity.Services;
import com.ojosdgato.ojosdgato.Service.ServicesService;

@RequestMapping(path="/ojosdgato/services")
@RestController
public class ServicesController {
	
	@Autowired
	private ServicesService serviceService;

	public ServicesController(ServicesService serviceService) {
		this.serviceService = serviceService;
	}
	
	@GetMapping
	public List<Services> getService(){
		return serviceService.getAllServices();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public Services getServiceById(@PathVariable Long id) {
		return serviceService.getServiceById(id);
	}
	
	@PostMapping
	public Services createService(@RequestBody Services service) {
		return serviceService.createService(service);
	}
	
	//Put
	@PutMapping
	public Services updateService(@RequestBody Services service) {
		return serviceService.updateService(service);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteService(@PathVariable Long id) {
		serviceService.deleteService(id);
	}
}
