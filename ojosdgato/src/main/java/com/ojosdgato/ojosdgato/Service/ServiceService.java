package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Service;
import com.ojosdgato.ojosdgato.Repository.ServiceRepository;

public class ServiceService {
	@Autowired
	private ServiceRepository serviceRepository;
	
	//Obtener Get
	public List<Service> getAllServices(){
		return serviceRepository.findAll();
	}
	
	//Get by ID
	public Service getServiceById(Long id) {
		return serviceRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Service createService(Service service) {
		return serviceRepository.save(service);
	}
	//Actualiza Put
	public Service updateService(Service service) {
		return serviceRepository.save(service);
	}
	
	//Borrar Delete
	public void deleteService(Long id) {
		serviceRepository.deleteById(id);
	}
}
