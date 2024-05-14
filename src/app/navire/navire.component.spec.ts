import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavireComponent } from './navire.component';

describe('NavireComponent', () => {
  let component: NavireComponent;
  let fixture: ComponentFixture<NavireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
