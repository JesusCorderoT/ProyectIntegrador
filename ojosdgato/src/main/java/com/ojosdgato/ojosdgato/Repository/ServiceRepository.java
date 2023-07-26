package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojosdgato.ojosdgato.Entity.Services;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {

}