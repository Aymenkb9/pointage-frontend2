import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointageDetailsComponent } from './pointage-details.component';

describe('PointageDetailsComponent', () => {
  let component: PointageDetailsComponent;
  let fixture: ComponentFixture<PointageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointageDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
