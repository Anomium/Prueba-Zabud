package com.api.backend.service;

import java.util.List;

import com.api.backend.model.User;

public interface IUserService {
	public List<User> getUsers();
	
	public User getUser(int id);
	
	public User addUser(User user);
	
	public User Login();
	
	public User editUser();
	
	public void deleteUser(int id);
}
