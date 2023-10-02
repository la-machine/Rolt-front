import { TestBed } from '@angular/core/testing';

import { LandtitlesService } from './landtitles.service';

describe('LandtitlesService', () => {
  let service: LandtitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandtitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
