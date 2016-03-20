package es.sd.Practica1_SD.modelos;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Especie {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long especieid;
	
	private String nombreCientifico;
	private String nombreComun;
	private String tipo;
	@ManyToMany
	private Collection<Area> areas = new ArrayList<>();
	
	public Especie(){}
	
	public Especie(String tip, String Comun, String Cientifico){
		this.tipo=tip;
		this.nombreComun=Comun;
		this.nombreCientifico=Cientifico;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getNombreComun() {
		return nombreComun;
	}

	public void setNombreComun(String nombreComun) {
		this.nombreComun = nombreComun;
	}

	public String getNombreCientifico() {
		return nombreCientifico;
	}

	public void setNombreCientifico(String nombreCientifico) {
		this.nombreCientifico = nombreCientifico;
	}

	public Collection<Area> getAreas() {
		return areas;
	}

	public void setAreas(Collection<Area> areas) {
		this.areas = areas;
	}

}
