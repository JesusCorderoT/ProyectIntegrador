package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojosdgato.ojosdgato.Entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
