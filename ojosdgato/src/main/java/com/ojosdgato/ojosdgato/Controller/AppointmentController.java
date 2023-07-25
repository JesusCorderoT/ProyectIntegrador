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

import com.ojosdgato.ojosdgato.Entity.Appointment;
import com.ojosdgato.ojosdgato.Service.AppointmentService;

@RequestMapping(path="/ojosdgato/appointments")
@RestController
public class AppointmentController {
	
	private final AppointmentService appointmentService;
	
	@Autowired
	public AppointmentController(AppointmentService appointmentService) {
		this.appointmentService = appointmentService;
	}
	
	@GetMapping
	public List<Appointment> getAppointment(){
		return appointmentService.getAllAppointments();
	}
	
	//Get individual
	@GetMapping("/{id}")
	public Appointment getAppointmentById(@PathVariable Long id) {
		return appointmentService.getAppointmentById(id);
	}
	
	@PostMapping
	public Appointment createAppointment(Appointment appointment) {
		return appointmentService.createAppointment(appointment);
	}
	
	//Put
	@PutMapping
	public Appointment updateAppointment(Appointment appointment) {
		return appointmentService.updateAppointment(appointment);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteAppointment(@PathVariable Long id) {
		appointmentService.deleteAppointment(id);
	}
}
