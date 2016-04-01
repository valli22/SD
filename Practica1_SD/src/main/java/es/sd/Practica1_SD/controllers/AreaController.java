package es.sd.Practica1_SD.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import es.sd.Practica1_SD.modelos.Area;
import es.sd.Practica1_SD.repository.AreaRepository;

@Controller
public class AreaController {

	@Autowired
	private AreaRepository rep;
	
	@RequestMapping(value="/addArea")
	public String index(@RequestParam String nombre,@RequestParam String extension,Model model) {
		
		Area newArea = new Area(nombre,extension);
		rep.save(newArea);
		
		return "addCorrecto";
	}
	
	@RequestMapping(value="/anadirEspecies")
	public String inicioPagina(Model model){
		
		List<Area> larea = rep.findAll();
		model.addAttribute("areasMul",larea);
		return "anadirEspecie";
		
	}
}
