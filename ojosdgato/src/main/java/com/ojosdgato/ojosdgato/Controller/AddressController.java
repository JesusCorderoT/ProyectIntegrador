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

import com.ojosdgato.ojosdgato.Entity.Address;
import com.ojosdgato.ojosdgato.Entity.User;
import com.ojosdgato.ojosdgato.Service.AddressService;
import com.ojosdgato.ojosdgato.Service.UserService;

@RequestMapping(path="/ojosdgato/address")
@RestController
public class AddressController {
	
	private AddressService addressService;
	private UserService userService;
	
	@Autowired
	public AddressController(AddressService addressService, UserService userService) {
		super();
		this.addressService = addressService;
		this.userService = userService;
	}
	
	@GetMapping
	public List<Address> getAllAddress(){
		return addressService.getAllAddress();
	}
	
	

	//Get individual
	@GetMapping("/{id}")
	public Address getAddressById(@PathVariable Long id) {
		return addressService.getAddressById(id);
	}
	
	@PostMapping
	public Address createAddress(@RequestBody Address address) {
		//Encontrar un match en la bd con el id correspondiente
		User persistentUser=userService.getUserById(address.getUser().getId_user());
		address.setUser(persistentUser);
		return addressService.createAddress(address);
	}
	
	//Put
	@PutMapping
	public Address updateAddress(@RequestBody Address address) {
		return addressService.updateAddress(address);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteAddress(@PathVariable Long id) {
		addressService.deleteAddress(id);
	}
}
