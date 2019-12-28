package com.api.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.model.User;
import com.api.backend.repository.UserRepository;


@Service
public class UserService implements IUserService {

	@Autowired
	UserRepository urep;
	
	@Override
	public List<User> getUsers() {
		return urep.findAll();
	}

	@Override
	public User getUser(int id) {
		return urep.findById(id).get();
	}

	@Override
	public User Login() {
		return null;
	}

	@Override
	public User editUser() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(int id) {
		urep.deleteById(id);
	}

	@Override
	public User addUser(User user) {
		return urep.save(user);
	}

}
