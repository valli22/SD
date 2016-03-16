package es.sd.Practica1_SD.modelos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Especie {
	
	@Id
	String tipo;
	String nombreComun;
	String nombreCientifico;
	String[] areas;
	
	public Especie(String tip, String Comun, String Cientifico, String[] a){
		this.tipo=tip;
		this.nombreComun=Comun;
		this.nombreCientifico=Cientifico;
		for(int i=0; i<a.length; i++){
			this.areas[i]=a[i];
		}
	}

}
