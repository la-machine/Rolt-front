import { TestBed } from '@angular/core/testing';

import { UTMServiceService } from './utmservice.service';

describe('UTMServiceService', () => {
  let service: UTMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UTMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
