import { TestBed } from '@angular/core/testing';

import { PointagesService } from './pointages.service';

describe('PointagesService', () => {
  let service: PointagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
