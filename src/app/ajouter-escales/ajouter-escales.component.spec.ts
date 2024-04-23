import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEscalesComponent } from './ajouter-escales.component';

describe('AjouterEscalesComponent', () => {
  let component: AjouterEscalesComponent;
  let fixture: ComponentFixture<AjouterEscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterEscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterEscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
