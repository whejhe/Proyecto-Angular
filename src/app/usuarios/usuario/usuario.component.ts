import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  private nombre='Carlos';
  private apellido='Fernandez';
  private edad=30;
  private email='carlos@gmail';

  getNombre(){
    return this.nombre;
  }
  getApellido(){
    return this.apellido;
  }
  getEdad(){
    return this.edad;
  }
  getEmail(){
    return this.email;
  }
}
