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
import com.ojosdgato.ojosdgato.Entity.ServiceOrder;
import com.ojosdgato.ojosdgato.Service.ServiceOrderService;
import com.ojosdgato.ojosdgato.Service.ServicesService;

@RequestMapping(path="/ojosdgato/serviceorders")
@RestController
public class ServiceOrderController {
	
	private ServiceOrderService serviceorderService;
	private ServicesService serviceService;
	
	@Autowired
	public ServiceOrderController(ServiceOrderService serviceorderService, ServicesService serviceService) {
		super();
		this.serviceorderService = serviceorderService;
		this.serviceService = serviceService;
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
	public ServiceOrder createServiceOrder(@RequestBody ServiceOrder serviceorder) {
		//Encontrar un servicio en la bd que haga match
		Services persistentService=serviceService.getServiceById(serviceorder.getService().getId_service());
		serviceorder.setService(persistentService);
		return serviceorderService.createServiceOrder(serviceorder);
	}
	
	//Put
	@PutMapping
	public ServiceOrder updateServiceOrder(@RequestBody ServiceOrder serviceorder) {
		return serviceorderService.updateServiceOrder(serviceorder);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteServiceOrder(@PathVariable Long id) {
		serviceorderService.deleteServiceOrder(id);
	}
}
