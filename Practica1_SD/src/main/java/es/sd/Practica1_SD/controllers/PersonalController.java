package es.sd.Practica1_SD.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import es.sd.Practica1_SD.modelos.Empleado;
import es.sd.Practica1_SD.repository.EmpleadoRepository;

@Controller
public class PersonalController {

	@Autowired
	private EmpleadoRepository rep;
	
	// CONTROLADOR PARA EL PERSONAL
	
		@RequestMapping(value="/consultaPersonal")
		public String index(Model model) {
			return "consultaPersonal";
		}
		
		@RequestMapping(value="/addCorrectoEmpleado")
		public String insertarEmpleado(@RequestParam String nombre,
								@RequestParam String apellidos,
								@RequestParam String correoElectronico,
								@RequestParam String tMovil,
								@RequestParam String tFijo,
								@RequestParam String tipo,
								Model model){
			
			Empleado emp = new Empleado(nombre,apellidos,correoElectronico,tMovil,tFijo,tipo);
			rep.save(emp);
			
			return "addCorrecto";
		}
}
