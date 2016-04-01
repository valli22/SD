package es.sd.Practica1_SD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import es.sd.Practica1_SD.modelos.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado,Long>{

	List<Empleado> findAllByApellidos(String apellido);
	Empleado findByNombreAndApellidos(String nombre, String apellidos);
	List<Empleado> findAllByTipo(String tipo);
	
}
