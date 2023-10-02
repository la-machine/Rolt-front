import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsidebarComponent } from './landsidebar.component';

describe('LandsidebarComponent', () => {
  let component: LandsidebarComponent;
  let fixture: ComponentFixture<LandsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandsidebarComponent]
    });
    fixture = TestBed.createComponent(LandsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
