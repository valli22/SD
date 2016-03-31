package es.sd.Practica1_SD.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import es.sd.Practica1_SD.modelos.Area;
import es.sd.Practica1_SD.modelos.Especie;
import es.sd.Practica1_SD.repository.EspecieRepository;

@Controller
public class EspecieController {

	@Autowired
	private EspecieRepository rep;
	
	// CONTROLADOR PARA LA ESPECIE
	
	@RequestMapping(value="/consultaEspecie")
	public String index(Model model) {
		return "consultaEspecie";
	}
	
	@RequestMapping(value="/addEspecie")
	public String insertar(@RequestParam String nombreCientifico,
							@RequestParam String nombreComun,
							@RequestParam String tipo,
							@RequestParam Collection<Area> areas,
							Model model){
		
		Especie esp = new Especie(tipo,nombreComun,nombreCientifico);
		rep.save(esp);
		
		return "addCorrecto";
	}
	
	@RequestMapping(value="/consultasEspecie")
	public String buscar(Model model){
		
		
		return "BuscarEspecie";
	}
	
}
