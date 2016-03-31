package es.sd.Practica1_SD.controllers;

import java.io.Console;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
		
		@RequestMapping(value="/consultasPersonal")
		public String buscar(Model model){
			
			return "BuscarEmpleado";
		}
		
		@RequestMapping(value="/consultasEmpleadoTipo")
		public String consultarTodos(@ModelAttribute String busqueda,Model model){
			System.out.println(busqueda);
			List<Empleado> busquedaEmp = rep.findAllByTipo(busqueda);
			model.addAttribute("listaBusquedaTipo",busquedaEmp);
			
			return "BuscarEmpleado";
		}
		
		@RequestMapping(value="/consultasEmpleadoApellidos")
		public String consultarApellidos(Model model){
			
			List<Empleado> busquedaEmp = rep.findAll();
			model.addAttribute("listaBusquedaTodos",busquedaEmp);
			
			return "BuscarEmpleado";
		}
}
