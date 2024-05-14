import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminaleComponent } from './terminale.component';

describe('TerminaleComponent', () => {
  let component: TerminaleComponent;
  let fixture: ComponentFixture<TerminaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerminaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerminaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
