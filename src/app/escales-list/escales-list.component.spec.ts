import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalesListComponent } from './escales-list.component';

describe('EscalesListComponent', () => {
  let component: EscalesListComponent;
  let fixture: ComponentFixture<EscalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscalesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
