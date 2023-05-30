import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  @Output() cEmpleado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  agregarC(value: string){
    this.cEmpleado.emit(value);
  }

}
