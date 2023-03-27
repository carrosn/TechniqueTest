import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { ConvocatoriasService } from '../services/convocatoriasServices.service';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styleUrls: ['./convocatorias.component.css']
})
export class ConvocatoriasComponent implements OnInit{
  
  lista:any=[];
constructor(private convocatoriaservice:ConvocatoriasService,private router:Router){}
  ngOnInit(): void {
    this.show();
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
  
  
    eliminarConvocatorias(id:number){
      this.convocatoriaservice.delConvocatorias(id).subscribe({
        //next: this.listarConvocatorias.bind(this)
           next: (v) => {console.log(v);
            
            this.ngOnInit();
            
            },
          //next: (v) => this.lista=v,
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
      });
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
