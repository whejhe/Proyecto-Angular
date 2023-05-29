import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas';
  titulo='Registro de Usuarios';
  mensaje="fsewfefe";
  registrado=false;
  nombre="";
  apellido="";

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario Registrado";
  }
}


