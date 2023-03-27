package gov.co.msconvocatorias.controller;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import gov.co.msconvocatorias.dto.ResponseDto;
import gov.co.msconvocatorias.links.ConvocatoriasLinks;
import gov.co.msconvocatorias.model.Convocatorias;
import gov.co.msconvocatorias.service.ConvocatoriasService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController

@RequestMapping("/api")

public class ConvocatoriasController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ConvocatoriasController.class);
	@Autowired
	private ConvocatoriasService convocatoriasService;
	@GetMapping(path = ConvocatoriasLinks.CONVOCATORIAS)
    public ResponseEntity<?> getConvocatorias() {
        List<Convocatorias> usuarioList = convocatoriasService.getConvocatoria();
        return ResponseEntity.ok(usuarioList);
    }
	
	@GetMapping(path = ConvocatoriasLinks.CONVOCATORIA)
    public ResponseEntity<?> getConvocatoria(@PathVariable("id") Long id) {
	try {
		LOGGER.info("ConvicatoriaIdController::: " + id);
		Convocatorias convocatoria = convocatoriasService.getConvocatoria(id);
        return ResponseEntity.ok(convocatoria);
	}catch (RuntimeException exc) {
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Resource Not Found", exc);
    }
    }
	
	@PostMapping(path = ConvocatoriasLinks.CREATE_CONVOCATORIAS)
    
    public ResponseEntity<?> createConvocatoria(@RequestBody Convocatorias convocatoria) {
        LOGGER.info("ConvicatoriaIdController: " + convocatoria);
        Convocatorias dispositivo = convocatoriasService.guardarConvocatoria(convocatoria);
        ResponseDto  response=new ResponseDto();
        response.setResponseCode(HttpStatus.OK);
        response.setMessage("OK");
        response.setData(dispositivo);
        response.setTransactionId("");
        
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
 
    }
	
	
	@DeleteMapping(path = ConvocatoriasLinks.DELETE_CONVOCATORIAS)  
	private void deleteConvocatoria(@PathVariable("id") Long id)   
	{  
		
		try {
			LOGGER.info("ConvicatoriaIdController::: " + id);
			convocatoriasService.deleteConvocatoria(id);  
		}catch (RuntimeException exc) {
	        throw new ResponseStatusException(
	                HttpStatus.NOT_FOUND, "Resource Not Found", exc);
	    }
		
	} 
	
	@PutMapping(path = ConvocatoriasLinks.UPDATE_CONVOCATORIAS)
	private ResponseEntity<?> updateConvocatoria(@RequestBody Convocatorias convocatoria)   
	{  
		
		LOGGER.info("ConvicatoriaIdController: " + convocatoria);
        Convocatorias dispositivo = convocatoriasService.updateConvocatoria(convocatoria);
        ResponseDto  response=new ResponseDto();
        response.setResponseCode(HttpStatus.OK);
        response.setMessage("OK");
        response.setData(dispositivo);
        response.setTransactionId("");
        
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
	 
	}  
	
}
