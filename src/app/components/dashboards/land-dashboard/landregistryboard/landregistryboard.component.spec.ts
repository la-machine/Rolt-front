import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandregistryboardComponent } from './landregistryboard.component';

describe('LandregistryboardComponent', () => {
  let component: LandregistryboardComponent;
  let fixture: ComponentFixture<LandregistryboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandregistryboardComponent]
    });
    fixture = TestBed.createComponent(LandregistryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
