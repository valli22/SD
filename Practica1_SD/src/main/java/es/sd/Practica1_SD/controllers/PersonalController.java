package es.sd.Practica1_SD.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import es.sd.Practica1_SD.*;

@Controller
public class PersonalController {

	// CONTROLADOR PARA LA PERSONAL
	
		@RequestMapping(value="/consultaPersonal")
		public String index(Model model) {
			return "consultaPersonal";
		}
	
}
