import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoEmpleadoComponent } from './hijo-empleado.component';

describe('HijoEmpleadoComponent', () => {
  let component: HijoEmpleadoComponent;
  let fixture: ComponentFixture<HijoEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijoEmpleadoComponent]
    });
    fixture = TestBed.createComponent(HijoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
