import { TestBed } from '@angular/core/testing';

import { ChurchLocationService } from './church-location.service';

describe('ChurchLocationService', () => {
  let service: ChurchLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChurchLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
