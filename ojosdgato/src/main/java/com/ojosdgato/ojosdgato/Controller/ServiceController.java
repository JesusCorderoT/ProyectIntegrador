package com.ojosdgato.ojosdgato.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojosdgato.ojosdgato.Entity.Service;
import com.ojosdgato.ojosdgato.Service.ServiceService;

@RequestMapping(path="/ojosdgato/services")
@RestController
public class ServiceController {
	
	private final ServiceService serviceService;
	
	@Autowired
	public ServiceController(ServiceService serviceService) {
		this.serviceService = serviceService;
	}
	
	@GetMapping
	public List<Service> getService(){
		return serviceService.getAllServices();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public Service getServiceById(@PathVariable Long id) {
		return serviceService.getServiceById(id);
	}
	
	@PostMapping
	public Service createService(Service service) {
		return serviceService.createService(service);
	}
	
	//Put
	@PutMapping
	public Service updateService(Service service) {
		return serviceService.updateService(service);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteService(@PathVariable Long id) {
		serviceService.deleteService(id);
	}
}
