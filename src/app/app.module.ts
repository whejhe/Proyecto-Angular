import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HijoEmpleadoComponent } from './hijo-empleado/hijo-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
