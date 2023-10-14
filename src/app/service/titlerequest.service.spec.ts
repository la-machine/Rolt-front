import { TestBed } from '@angular/core/testing';

import { TitlerequestService } from './titlerequest.service';

describe('TitlerequestService', () => {
  let service: TitlerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
