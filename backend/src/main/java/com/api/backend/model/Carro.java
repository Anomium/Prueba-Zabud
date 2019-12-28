package com.api.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "carros")
public class Carro {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "marca")
	private String marca;
	
	@Column(name = "precio")
	private String precio;
	
	@Column(name = "url")
	private String url;

	public Carro() {
	}

	public Carro(int id, String marca, String precio, String url) {
		super();
		this.id = id;
		this.marca = marca;
		this.precio = precio;
		this.url = url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getPrecio() {
		return precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	
}
