package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.User;
import com.ojosdgato.ojosdgato.Repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	//Obtener Get
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	//Get by ID
	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	//Crear Post
	public User createUser(User user) {
		return userRepository.save(user);
	}
	//Actualiza Put
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	//Borrar Delete
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
}
