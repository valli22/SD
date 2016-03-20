package es.sd.Practica1_SD.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import es.sd.Practica1_SD.modelos.Especie;
import es.sd.Practica1_SD.repository.EspecieRepository;

@Controller
public class Catalogo {
	
	@Autowired
	private EspecieRepository espRep;

	@RequestMapping(value="/")
	public String catalogo(Model model) {
		List<Especie> l = espRep.findAll();
		model.addAttribute("comoquieras",l);
		return "catalogo";
	}
	
	
}
