package es.sd.Practica1_SD.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.sd.Practica1_SD.modelos.Especie;

public interface EspecieRepository extends JpaRepository<Especie,Long>{

	List<Especie> findAllByNombreComun(String nombreComun);
	List<Especie> findAllByTipo(String tipo);
	List<Especie> findAll();
	
}
