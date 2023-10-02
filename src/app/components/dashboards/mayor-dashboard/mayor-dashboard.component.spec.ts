import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorDashboardComponent } from './mayor-dashboard.component';

describe('MayorDashboardComponent', () => {
  let component: MayorDashboardComponent;
  let fixture: ComponentFixture<MayorDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayorDashboardComponent]
    });
    fixture = TestBed.createComponent(MayorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
