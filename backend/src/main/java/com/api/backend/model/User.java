package com.api.backend.model;

import javax.persistence.*;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "userName")
	private String userName;
	
	@Column(name = "pass")
	private String pass;

	public int getId() {
		return id;
	}
	
	public User() {}

	public User(int id, String userName, String pass) {
		super();
		this.id = id;
		this.userName = userName;
		this.pass = pass;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}
	
}
