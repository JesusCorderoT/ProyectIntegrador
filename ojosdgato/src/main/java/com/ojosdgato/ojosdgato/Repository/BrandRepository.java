package com.ojosdgato.ojosdgato.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ojosdgato.ojosdgato.Entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

}