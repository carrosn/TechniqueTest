import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { MostrarComponent } from './crud/mostrar/mostrar.component';
import { AgregarComponent } from './crud/agregar/agregar.component';
import { ModificarComponent } from './crud/modificar/modificar.component';


  



@NgModule({
  imports: [RouterModule.forRoot([
    {path :'' , component: HomeComponent },
    {path :'convocatoria' , component: ConvocatoriasComponent},
    {path :'agregar' , component: AgregarComponent},
    {path :'modificar/:id' , component: ModificarComponent},
    {path :'**' , redirectTo: '/',pathMatch:'full'}

 
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
