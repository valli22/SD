package es.sd.Practica1_SD;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Catalogo {
	
	@RequestMapping(value="/")
	public String catalogo(Model model) {

		return "catalogo";
	}
}
