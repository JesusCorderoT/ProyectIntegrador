package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import com.ojosdgato.ojosdgato.Entity.Services;
import com.ojosdgato.ojosdgato.Repository.ServiceRepository;

@Service
public class ServicesService {
	@Autowired
	private ServiceRepository serviceRepository;
	
	//Obtener Get
	public List<Services> getAllServices(){
		return serviceRepository.findAll();
	}
	
	//Get by ID
	public Services getServiceById(Long id) {
		return serviceRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Services createService(Services service) {
		return serviceRepository.save(service);
	}
	//Actualiza Put
	public Services updateService(Services service) {
		return serviceRepository.save(service);
	}
	
	//Borrar Delete
	public void deleteService(Long id) {
		serviceRepository.deleteById(id);
	}
}
