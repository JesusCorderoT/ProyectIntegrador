package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}