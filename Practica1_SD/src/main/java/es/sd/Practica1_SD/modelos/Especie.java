package es.sd.Practica1_SD.modelos;

public class Especie {
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
