package es.sd.Practica1_SD.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import es.sd.Practica1_SD.*;

@Controller
public class EspecieController {

	// CONTROLADOR PARA LA ESPECIE
	
	@RequestMapping(value="/consultaEspecie")
	public String index(Model model) {
		return "consultaEspecie";
	}
	
}
