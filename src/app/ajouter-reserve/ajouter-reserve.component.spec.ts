import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReserveComponent } from './ajouter-reserve.component';

describe('AjouterReserveComponent', () => {
  let component: AjouterReserveComponent;
  let fixture: ComponentFixture<AjouterReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
