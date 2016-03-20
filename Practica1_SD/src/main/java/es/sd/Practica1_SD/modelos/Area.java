package es.sd.Practica1_SD.modelos;

import java.util.ArrayList;
import java.util.Collection;

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
	@ManyToMany(mappedBy="areas")
	private Collection<Especie> especies = new ArrayList<>();
	
	public Area(){}
	
	public Area(String nommbre){
		this.nombre=nombre;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Collection<Especie> getEspecies() {
		return especies;
	}

	public void setEspecies(Collection<Especie> especies) {
		this.especies = especies;
	}
	
	
}
