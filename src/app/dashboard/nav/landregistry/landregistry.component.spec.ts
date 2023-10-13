import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandregistryComponent } from './landregistry.component';

describe('LandregistryComponent', () => {
  let component: LandregistryComponent;
  let fixture: ComponentFixture<LandregistryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandregistryComponent]
    });
    fixture = TestBed.createComponent(LandregistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
