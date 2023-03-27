import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { convocatorias } from '../modelo/convocatoriadto';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {
  url='http://37.44.247.214:8080/api/convocatorias';

  constructor(private http:HttpClient) { }

  getConvocatorias():Observable<any>{
    return this.http.get(this.url);
  }
  getConvocatoriaByNumero(id: number ):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveConvocatorias(convocatoria:convocatorias):Observable<any>{
    return this.http.post(this.url,convocatoria);
  }

  editConvocatorias(convocatoria:convocatorias):Observable<any>{
    return this.http.put(this.url,convocatoria);
  }
  delConvocatorias(id: number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
      
  }

}
