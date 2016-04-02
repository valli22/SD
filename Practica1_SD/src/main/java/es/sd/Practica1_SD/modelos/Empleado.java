package es.sd.Practica1_SD.modelos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Empleado {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long empleadoid;
	
	private String nombre;
	private String apellidos;
	private String correoElectronico;
	private String tMovil;
	private String tFijo;
	private String tipo;
	
	public Empleado(){}
	
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
	public void setCorreoElectronico(String correo){
		this.correoElectronico=correo;
	}
	public String getCorreoElectronico(){
		return this.correoElectronico;
	}
	public void setTMovil(String mov){
		this.tMovil=mov;
	}
	public String getTMovil(){
		return this.tMovil;
	}
	public void setTFijo(String fijo){
		this.tFijo=fijo;
	}
	public String getTFijo(){
		return this.tFijo;
	}
	public void setTipo(String tip){
		this.tipo=tip;
	}
	public String getTipo(){
		return this.tipo;
	}
	public long getId(){
		return this.empleadoid;
	}
	public boolean isSelected(String input){
		return this.tipo.equals(input);
	}
}
