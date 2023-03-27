import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { convocatorias } from 'src/app/modelo/convocatoriadto';
import { ConvocatoriasService } from 'src/app/services/convocatoriasServices.service'; 

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  convocatoriaAct :convocatorias={numero:0,titulo:'',descripcion:'',estado:'',fechaAp:''};
  id:number=0;


  constructor(private convocatoriaservice:ConvocatoriasService,private router:Router,private acivateRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.id= Number(this.acivateRouter.snapshot.paramMap.get('id') || '' );
    this.convocatoriaservice.getConvocatoriaByNumero( this.id).subscribe({
      next: (v) => {this.convocatoriaAct=v;
        console.log(v);
      },
       //next: (v) => this.lista=v,
       error: (e) => console.error(e),
       complete: () => console.info('complete') 
    })
       //next: this.listarConvocatorias.bind(this)
       
    
    console.log(this.id);
    this.show();
  }

  modificar(){
    this.convocatoriaservice.editConvocatorias(this.convocatoriaAct).subscribe({
    
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
}
