package gov.co.msconvocatorias.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gov.co.msconvocatorias.model.Convocatorias;
import gov.co.msconvocatorias.repository.ConvocatoriasRepository;



@Service
public class ConvocatoriasService {
	
	@Autowired
	private ConvocatoriasRepository convocatoriasRepository;
	
	
	
	public ConvocatoriasService() {
		
	}

	public Convocatorias guardarConvocatoria(Convocatorias convocatoria) {
        return convocatoriasRepository.save(convocatoria);
    }
	
	public List<Convocatorias> getConvocatoria() {
        return convocatoriasRepository.findAll();
    }
	
	public Convocatorias getConvocatoria(Long convocatoriaId ) {
		Optional<Convocatorias> convocatoria = convocatoriasRepository.findById(convocatoriaId);
        return convocatoria.get();
    }
	
	public void deleteConvocatoria(Long convocatoriaId ) {
		convocatoriasRepository.deleteById(convocatoriaId);
       
    }
	public Convocatorias updateConvocatoria(Convocatorias convocatoria) {
        return convocatoriasRepository.save(convocatoria);
    }
	
}
