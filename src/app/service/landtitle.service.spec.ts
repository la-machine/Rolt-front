import { TestBed } from '@angular/core/testing';

import { LandtitleService } from './landtitle.service';

describe('LandtitleService', () => {
  let service: LandtitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandtitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
