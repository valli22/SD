package es.sd.Practica1_SD.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.sd.Practica1_SD.modelos.Area;

public interface AreaRepository extends JpaRepository<Area,Long>{
		
		List<Area> findAll();
		Area findByNombre(String nombre);
		
}
