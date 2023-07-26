package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.Address;
import com.ojosdgato.ojosdgato.Repository.AddressRepository;

@Service
public class AddressService {

	@Autowired
	private AddressRepository addressRepository;
	
	//Obtener Get
	public List<Address> getAllAddress(){
		return addressRepository.findAll();
	}

	//Get by ID
	public Address getAddressById(Long id) {
		//return addressRepository.findById(id).orElse(null);
		return addressRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Address createAddress(Address address) {
		return addressRepository.save(address);
	}
	//Actualiza Put
	public Address updateAddress(Address address) {
		return addressRepository.save(address);
	}
	
	//Borrar Delete
	public void deleteAddress(Long id) {
		addressRepository.deleteById(id);
	}
}
