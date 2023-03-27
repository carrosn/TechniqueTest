package gov.co.msconvocatorias.dto;

import org.springframework.http.HttpStatus;

import gov.co.msconvocatorias.model.Convocatorias;
import lombok.Data;

/**
 * Clase POJO
 *
 * @author: LR.
 * @version: 25/03/2023
 */
@Data
public class ResponseDto {

    private HttpStatus responseCode;
    private String message;
    private Convocatorias data;
    private String transactionId;

    public HttpStatus getResponseCode() {
		return responseCode;
	}

	public void setResponseCode(HttpStatus responseCode) {
		this.responseCode = responseCode;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}
	

	public Convocatorias getData() {
		return data;
	}

	public void setData(Convocatorias data) {
		this.data = data;
	}

	public ResponseDto() {

    }

    public ResponseDto(HttpStatus responseCode, String message, Convocatorias data, String transactionId) {
        super();
        this.responseCode = responseCode;
        this.message = message;
        this.data = data;
        this.transactionId = transactionId;
    }

}
