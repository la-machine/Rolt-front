import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionofficerComponent } from './subdivisionofficer.component';

describe('SubdivisionofficerComponent', () => {
  let component: SubdivisionofficerComponent;
  let fixture: ComponentFixture<SubdivisionofficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubdivisionofficerComponent]
    });
    fixture = TestBed.createComponent(SubdivisionofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
