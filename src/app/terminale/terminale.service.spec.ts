import { TestBed } from '@angular/core/testing';

import { TerminaleService } from './terminale.service';

describe('TerminaleService', () => {
  let service: TerminaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerminaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
