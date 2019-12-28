package com.api.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.backend.model.User;
import com.api.backend.service.UserService;

@RestController
@RequestMapping("/api")

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class UserController {

	@Autowired(required = true)
	UserService usr;
	
	@GetMapping("/user")
	public List<User> getUsers() {
		return usr.getUsers();
	}
	
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable int id) {
		return usr.getUser(id);
	}
	
	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return usr.addUser(user);
	}
	
}
