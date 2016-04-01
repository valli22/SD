package es.sd.Practica1_SD.controllers;

import java.util.Collection;
import java.util.List;

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
		
		
		return "buscarEspecie";
	}
	
	@RequestMapping(value="/consultasEspecieNombreComun")
	public String consultarNombreComun(@RequestParam (required=true) String nombreComun, Model model){
		
		List<Especie> busquedaEmp = rep.findAllByNombreComun(nombreComun);
		model.addAttribute("listaBusquedaNombreComun",busquedaEmp);
		
		return "buscarEspecie";
	}
	
	@RequestMapping(value="/consultasEspecieTipo")
	public String consultarTipo(@RequestParam (required=true) String tipo, Model model){
		
		List<Especie> busquedaEmp = rep.findAllByTipo(tipo);
		model.addAttribute("listaBusquedaTipo",busquedaEmp);
		
		return "buscarEspecie";
	}
	
	@RequestMapping(value="/consultasEspecieTodas")
	public String consultarTodas(Model model){
		
		List<Especie> busquedaEmp = rep.findAll();
		model.addAttribute("listaBusquedaTodas",busquedaEmp);
		
		return "buscarEspecie";
	}
	
}
