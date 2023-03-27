import { Component, OnInit } from '@angular/core';

import { ConvocatoriasService } from '../services/convocatoriasServices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista:any=[];
constructor(private convocatoriaservice:ConvocatoriasService){}
  ngOnInit(): void {
    this.listarConvocatorias();
  }

  listarConvocatorias(){
  this.convocatoriaservice.getConvocatorias().subscribe({
    //next: this.listarConvocatorias.bind(this)
       next: (v) => this.lista=v,
      //next: (v) => this.lista=v,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });





  }


}
