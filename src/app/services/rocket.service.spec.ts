import { TestBed } from '@angular/core/testing';

import { RocketService } from './rocket.service';

describe('RocketService', () => {
  let service: RocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
