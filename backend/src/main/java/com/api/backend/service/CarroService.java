package com.api.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.Carro;
import com.api.backend.repository.CarroRepository;

@Service 
public class CarroService implements ICarroService{

	@Autowired
	CarroRepository carrep;
	
	@Override
	public List<Carro> getCarro() {
		return carrep.findAll();
	}

	@Override
	public Carro getCarro(int id) {
		return carrep.findById(id).get();
	}

	@Override
	public Carro addCarro(Carro car) {
		return carrep.save(car);
	}

	@Override
	public void deleteCarro(int id) {
		carrep.deleteById(id);
	}

	@Override
	public Carro updateCarro(Carro car) {
		return carrep.save(car);
	}

	
}
