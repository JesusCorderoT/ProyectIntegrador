package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ojosdgato.ojosdgato.Entity.Address;


public interface AddressRepository extends JpaRepository<Address, Long> {

}
