import { TestBed } from '@angular/core/testing';

import { AjouterPointageService } from './ajouter-pointage.service';

describe('AjouterPointageService', () => {
  let service: AjouterPointageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterPointageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
