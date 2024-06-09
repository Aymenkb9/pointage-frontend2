import { TestBed } from '@angular/core/testing';

import { AjouterReserveService } from './ajouter-reserve.service';

describe('AjouterReserveService', () => {
  let service: AjouterReserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterReserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
