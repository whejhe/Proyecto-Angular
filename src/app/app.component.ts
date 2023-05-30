import { Component } from '@angular/core';
import { Empleado } from './empleado.module';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica Empleado';
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Desarrollador', 1200),
    new Empleado('Ana', 'Perez', 'Presidente', 7500),
    new Empleado('Laura', 'Perez', 'Directiva', 5500),
    new Empleado('Maria', 'Perez', 'Administrativo', 1500)
  ];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);
    this.empleados.push(miEmpleado);
  }

  // arrayCaracteristicas=[''];
  // agregarC(newC: string){
  //   this.arrayCaracteristicas.push(newC);
  // }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  
}


