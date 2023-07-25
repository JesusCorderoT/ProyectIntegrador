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

import com.ojosdgato.ojosdgato.Entity.Address;
import com.ojosdgato.ojosdgato.Service.AddressService;

@RequestMapping(path="/ojosdgato/addresss")
@RestController
public class AddressController {
	
	private final AddressService addressService;
	
	@Autowired
	public AddressController(AddressService addressService) {
		this.addressService = addressService;
	}
	
	@GetMapping
	public List<Address> getAddress(){
		return addressService.getAllAddresss();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public Address getAddressById(@PathVariable Long id) {
		return addressService.getAddressById(id);
	}
	
	@PostMapping
	public Address createAddress(Address address) {
		return addressService.createAddress(address);
	}
	
	//Put
	@PutMapping
	public Address updateAddress(Address address) {
		return addressService.updateAddress(address);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteAddress(@PathVariable Long id) {
		addressService.deleteAddress(id);
	}
}
