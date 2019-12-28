package com.api.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.backend.model.Carro;
import com.api.backend.repository.UserRepository;
import com.api.backend.service.CarroService;


@RestController
@RequestMapping("/api")

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class CarroController {
	
	@Autowired(required = true)
	CarroService carse;
	
    UserRepository urep;
	
    @GetMapping("/carro")
    public List<Carro> getCarro(){
        return carse.getCarro();
    }
    
    @GetMapping("/carro/{id}")
    public Carro getUser(@PathVariable int id){
        return carse.getCarro(id);
    }
    
    @PostMapping("/carro")
    public Carro addCarro(@RequestBody Carro car){
        return carse.addCarro(car);
    }
    
    @PutMapping("/carro/{id}")
    public Carro updateCarro(@RequestBody Carro car, @PathVariable int id){
        car.setId(id);
        return carse.updateCarro(car);
    }
	
	@DeleteMapping("/carro/{id}")
	public void deleteCarro(@PathVariable int id) {
		carse.deleteCarro(id);
	}
	
}
