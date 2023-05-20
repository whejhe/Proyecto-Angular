import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  nombre='Carlos';
  apellido='Fernandez';
  private edad=30;
  email='carlos@gmail';

  getEdad(){
    return this.edad;
  }

}
