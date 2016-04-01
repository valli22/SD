package es.sd.Practica1_SD.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import es.sd.Practica1_SD.modelos.Area;
import es.sd.Practica1_SD.modelos.Empleado;
import es.sd.Practica1_SD.modelos.Especie;
import es.sd.Practica1_SD.repository.AreaRepository;
import es.sd.Practica1_SD.repository.EspecieRepository;

@Controller
public class EspecieController {

	@Autowired
	private EspecieRepository rep;
	@Autowired
	private AreaRepository areasRep;
	
	// CONTROLADOR PARA LA ESPECIE
	
	@RequestMapping(value="/consultaEspecie")
	public String index(Model model) {
		return "consultaEspecie";
	}

	@RequestMapping(value="/addEspecie")
	public String insertar(@RequestParam String nombreCientifico,
							@RequestParam String nombreComun,
							@RequestParam String tipo,
							@RequestParam String[] areas,
							Model model){
		List<Area> areasaux = new ArrayList<>();
		Area newArea = new Area();
		for(int i = 0; i<areas.length;i++){
			System.out.println(areas[i]);
			areasaux.add(areasRep.findByNombre(areas[i]));
		}
		Especie esp = new Especie(tipo,nombreComun,nombreCientifico,areasaux);
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
	
	@RequestMapping(value="/especie/{idhtml}")
	public String inicioEditarPersonal(@PathVariable(value = "idhtml") String idhtml,Model model){
		Especie emp = rep.findOne(Long.parseLong(idhtml));
		model.addAttribute("especieEditar",emp);
		List<Area> areas = areasRep.findAll();
		model.addAttribute("areasMul",areas);
		return "editarEspecie";
	}
	
	@RequestMapping(value="/editarEspecie/{idhtml}")
	public String editarPersonal(@PathVariable(value = "idhtml") String idhtml,
									@RequestParam String nombreComun,
									@RequestParam String nombreCientifico,
									@RequestParam String[] areas,
									Model model){
		
		Especie esp = rep.findOne(Long.parseLong(idhtml));
		esp.setNombreComun(nombreComun);
		esp.setNombreCientifico(nombreCientifico);
		List<Area> areasN=new ArrayList<>();
		for(int i =0;i<areas.length;i++){
			areasN.add(areasRep.findByNombre(areas[i]));
		}
		esp.setAreas(areasN);
		rep.save(esp);
		return "addCorrecto";
	}
}
