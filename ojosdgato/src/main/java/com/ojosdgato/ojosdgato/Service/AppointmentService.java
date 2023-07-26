package com.ojosdgato.ojosdgato.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ojosdgato.ojosdgato.Entity.Appointment;
import com.ojosdgato.ojosdgato.Repository.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	//Obtener Get
	public List<Appointment> getAllAppointments(){
		return appointmentRepository.findAll();
	}
	
	//Get by ID
	public Appointment getAppointmentById(Long id) {
		return appointmentRepository.findById(id).orElse(null);
	}
	//Crear Post
	public Appointment createAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}
	//Actualiza Put
	public Appointment updateAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}
	
	//Borrar Delete
	public void deleteAppointment(Long id) {
		appointmentRepository.deleteById(id);
	}
}
