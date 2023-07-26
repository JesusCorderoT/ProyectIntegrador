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

import com.ojosdgato.ojosdgato.Entity.User;
import com.ojosdgato.ojosdgato.Service.UserService;

@RequestMapping(path="/ojosdgato/users")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping
	public List<User> getUser(){
		return userService.getAllUsers();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public User getUserById(@PathVariable Long id) {
		return userService.getUserById(id);
	}
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}
	
	//Put
	@PutMapping
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
	}
}
