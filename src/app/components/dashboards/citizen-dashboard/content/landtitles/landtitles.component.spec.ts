import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandtitlesComponent } from './landtitles.component';

describe('LandtitlesComponent', () => {
  let component: LandtitlesComponent;
  let fixture: ComponentFixture<LandtitlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandtitlesComponent]
    });
    fixture = TestBed.createComponent(LandtitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
