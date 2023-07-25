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

import com.ojosdgato.ojosdgato.Entity.ServiceOrder;
import com.ojosdgato.ojosdgato.Service.ServiceOrderService;

@RequestMapping(path="/ojosdgato/serviceorders")
@RestController
public class ServiceOrderController {
	
	private final ServiceOrderService serviceorderService;
	
	@Autowired
	public ServiceOrderController(ServiceOrderService serviceorderService) {
		this.serviceorderService = serviceorderService;
	}
	
	@GetMapping
	public List<ServiceOrder> getServiceOrder(){
		return serviceorderService.getAllServiceOrders();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public ServiceOrder getServiceOrderById(@PathVariable Long id) {
		return serviceorderService.getServiceOrderById(id);
	}
	
	@PostMapping
	public ServiceOrder createServiceOrder(ServiceOrder serviceorder) {
		return serviceorderService.createServiceOrder(serviceorder);
	}
	
	//Put
	@PutMapping
	public ServiceOrder updateServiceOrder(ServiceOrder serviceorder) {
		return serviceorderService.updateServiceOrder(serviceorder);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteServiceOrder(@PathVariable Long id) {
		serviceorderService.deleteServiceOrder(id);
	}
}
