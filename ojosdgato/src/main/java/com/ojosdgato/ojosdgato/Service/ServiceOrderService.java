package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.ServiceOrder;
import com.ojosdgato.ojosdgato.Repository.ServiceOrderRepository;

@Service
public class ServiceOrderService {
	@Autowired
	private ServiceOrderRepository serviceOrderRepository;
	
	//Obtener Get
	public List<ServiceOrder> getAllServiceOrders(){
		return serviceOrderRepository.findAll();
	}
	
	//Get by ID
	public ServiceOrder getServiceOrderById(Long id) {
		return serviceOrderRepository.findById(id).orElse(null);
	}
	//Crear Post
	public ServiceOrder createServiceOrder(ServiceOrder serviceOrder) {
		return serviceOrderRepository.save(serviceOrder);
	}
	//Actualiza Put
	public ServiceOrder updateServiceOrder(ServiceOrder serviceOrder) {
		return serviceOrderRepository.save(serviceOrder);
	}
	
	//Borrar Delete
	public void deleteServiceOrder(Long id) {
		serviceOrderRepository.deleteById(id);
	}
}
