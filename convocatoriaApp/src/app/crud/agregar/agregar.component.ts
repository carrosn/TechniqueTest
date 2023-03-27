import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { convocatorias } from 'src/app/modelo/convocatoriadto';
import { ConvocatoriasService } from 'src/app/services/convocatoriasServices.service'; 

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  convocatoriaNueva :convocatorias={numero:0,titulo:'',descripcion:'',estado:'',fechaAp:''};
  constructor(private convocatoriaservice:ConvocatoriasService,private router:Router){}
  ngOnInit(): void {this.show();}


agregar(){
  this.convocatoriaservice.saveConvocatorias(this.convocatoriaNueva).subscribe({
  
      next: (v) => {console.log(v)
      this.router.navigate(['/convocatoria']);
      
      },
      
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });

}
regresar(){
  
  this.router.navigate(['/convocatoria']);
  
}
show() {
  let ej = new NavBarComponent();
 ej.showData();
 
}
hiddeData() {
  let ej = new NavBarComponent();
 ej.hiddeData();
 
}

}
