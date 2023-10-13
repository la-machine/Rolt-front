import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandTitleRequestComponent } from './land-title-request.component';

describe('LandTitleRequestComponent', () => {
  let component: LandTitleRequestComponent;
  let fixture: ComponentFixture<LandTitleRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandTitleRequestComponent]
    });
    fixture = TestBed.createComponent(LandTitleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
