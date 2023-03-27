import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarComponent } from './crud/mostrar/mostrar.component';
import { AgregarComponent } from './crud/agregar/agregar.component';
import { ModificarComponent } from './crud/modificar/modificar.component';
import { EliminarComponent } from './crud/eliminar/eliminar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
 
    ConvocatoriasComponent,
      MostrarComponent,
      AgregarComponent,
      ModificarComponent,
      EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
