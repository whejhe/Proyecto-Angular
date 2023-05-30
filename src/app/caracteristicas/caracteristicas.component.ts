import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  @Output() cEmpleado = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
    
  }

  agregarC(value: string){
    this.miServicio.muestraMensaje(value)
    this.cEmpleado.emit(value);
  }

}
