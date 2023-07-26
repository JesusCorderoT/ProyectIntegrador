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

import com.ojosdgato.ojosdgato.Entity.Appointment;
import com.ojosdgato.ojosdgato.Entity.Services;
import com.ojosdgato.ojosdgato.Entity.User;
import com.ojosdgato.ojosdgato.Service.AppointmentService;
import com.ojosdgato.ojosdgato.Service.ServicesService;
import com.ojosdgato.ojosdgato.Service.UserService;

@RequestMapping(path="/ojosdgato/appointments")
@RestController
public class AppointmentController {
	
	private AppointmentService appointmentService;
	private UserService userService;
	private ServicesService serviceService;
	
	@Autowired
	public AppointmentController(AppointmentService appointmentService, UserService userService,
			ServicesService serviceService) {
		super();
		this.appointmentService = appointmentService;
		this.userService = userService;
		this.serviceService = serviceService;
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
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		//Identificar usuario que haga match en bd
		User persistentUser=userService.getUserById(appointment.getUser().getId_user());
		appointment.setUser(persistentUser);
		//Identificar servicio que haga match en bd
		Services persistentService=serviceService.getServiceById(appointment.getService().getId_service());
		appointment.setService(persistentService);
		return appointmentService.createAppointment(appointment);
	}
	
	//Put
	@PutMapping
	public Appointment updateAppointment(@RequestBody Appointment appointment) {
		return appointmentService.updateAppointment(appointment);
	}
	
	//Delete
	@DeleteMapping("/{id}")
	public void deleteAppointment(@PathVariable Long id) {
		appointmentService.deleteAppointment(id);
	}
}
