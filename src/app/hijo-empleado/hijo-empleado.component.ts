import { Component,Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.module'

@Component({
  selector: 'app-hijo-empleado',
  templateUrl: './hijo-empleado.component.html',
  styleUrls: ['./hijo-empleado.component.css']
})
export class HijoEmpleadoComponent implements OnInit {

  @Input() empleadoLista: Empleado;
  @Input() indice:number;

  constructor(){}
  ngOnInit(): void {
    
  }

}
