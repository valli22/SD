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
public class Especie {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long especieid;
	
	private String nombreCientifico;
	private String nombreComun;
	private String tipo;
	@ManyToMany
	private List<Area> areas;
	
	public Especie(){}
	
	public Especie(String tip, String Comun, String Cientifico, List<Area> areas){
		this.tipo=tip;
		this.nombreComun=Comun;
		this.nombreCientifico=Cientifico;
		this.areas = areas;
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

	public List<Area> getAreas() {
		return areas;
	}

	public void setAreas(List<Area> areas) {
		this.areas = areas;
	}

	public long getId(){
		return this.especieid;
	}
	public boolean tieneAreas(Area area){
		boolean encontrado =false;
		for(Area areaA: this.areas){			
			if(areaA.getId()==area.getId()){
				encontrado=true;
				break;
			}
		}
		return encontrado;
	}
	public boolean esTipo(String tipo){	
		boolean encontrado=  this.tipo.equals(tipo);
		return encontrado;
	}
}
