import { TestBed } from '@angular/core/testing';

import { RolestoreService } from './rolestore.service';

describe('RolestoreService', () => {
  let service: RolestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
