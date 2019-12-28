package com.api.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.backend.model.Carro;

public interface CarroRepository extends JpaRepository<Carro, Integer> {

}
