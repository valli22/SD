package es.sd.Practica1_SD.modelos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Empleado {
	
	@Id
	String nombre,apellidos;
	String correoElectronico;
	String tMovil, tFijo;
	String tipo;
	
	public Empleado(String nom, String ape, String corr,String mov,String fijo, String tip){
		this.nombre=nom;
		this.apellidos=ape;
		this.correoElectronico=corr;
		this.tMovil=mov;
		this.tFijo=fijo;
		this.tipo=tip;
	}
	public void setNombre(String nom){
		this.nombre=nom;
	}
	public String getNombre(){
		return this.nombre;
	}
	public void setApellidos(String ape){
		this.apellidos=ape;
	}
	public String getApellidos(){
		return this.apellidos;
	}
	public void setCorreo(String correo){
		this.correoElectronico=correo;
	}
	public String getCorreo(){
		return this.correoElectronico;
	}
	public void setMovil(String mov){
		this.tMovil=mov;
	}
	public String getMovil(){
		return this.tMovil;
	}
	public void setFijo(String fijo){
		this.tFijo=fijo;
	}
	public String getFijo(){
		return this.tFijo;
	}
	public void setTipo(String tip){
		this.tipo=tip;
	}
	public String getTipo(){
		return this.tipo;
	}
}
