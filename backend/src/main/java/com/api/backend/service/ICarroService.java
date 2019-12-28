package com.api.backend.service;

import java.util.List;

import com.api.backend.model.Carro;

public interface ICarroService {

	public List<Carro> getCarro();
	
	public Carro getCarro(int id);
	
	public Carro addCarro(Carro car);
	
	public Carro updateCarro(Carro car);
	
	public void deleteCarro(int id);
}
