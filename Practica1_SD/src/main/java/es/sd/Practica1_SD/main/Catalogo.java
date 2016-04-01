package es.sd.Practica1_SD.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import es.sd.Practica1_SD.modelos.Area;
import es.sd.Practica1_SD.modelos.Empleado;
import es.sd.Practica1_SD.modelos.Especie;
import es.sd.Practica1_SD.repository.AreaRepository;
import es.sd.Practica1_SD.repository.EmpleadoRepository;
import es.sd.Practica1_SD.repository.EspecieRepository;

@Controller
public class Catalogo {
	
	@Autowired
	private EspecieRepository espRep;
	@Autowired
	private EmpleadoRepository empRep;
	@Autowired
	private AreaRepository areaRep;
	
	@RequestMapping(value="/")
	public String catalogo(Model model) {
		List<Especie> l = espRep.findAll();
		model.addAttribute("comoquieras",l);
		List<Empleado> lemp = empRep.findAll();
		model.addAttribute("empleados", lemp);
		List<Area> larea = areaRep.findAll();
		model.addAttribute("areas",larea);
		return "catalogo";
	}
	
	
}
