package es.sd.Practica1_SD.modelos;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Area {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long areaid;
	
	private String nombre;
	private String extension;
	@ManyToMany(mappedBy="areas")
	private List<Especie> especies = new ArrayList<>();
	
	public Area(){}
	
	public Area(String nombre, String extension){
		this.nombre=nombre;
		this.extension=extension;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Especie> getEspecies() {
		return especies;
	}

	public void setEspecies(List<Especie> especies) {
		this.especies = especies;
	}
	
	public void setExtension(String extension){
		this.extension=extension;
	}
	
	public String getExtension(){
		return this.extension;
	}
	
	public long getId(){
		return this.areaid;
	}
}
