import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandtitleComponent } from './landtitle.component';

describe('LandtitleComponent', () => {
  let component: LandtitleComponent;
  let fixture: ComponentFixture<LandtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandtitleComponent]
    });
    fixture = TestBed.createComponent(LandtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
