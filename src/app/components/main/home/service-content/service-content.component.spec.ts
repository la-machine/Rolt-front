import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContentComponent } from './service-content.component';

describe('ServiceContentComponent', () => {
  let component: ServiceContentComponent;
  let fixture: ComponentFixture<ServiceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceContentComponent]
    });
    fixture = TestBed.createComponent(ServiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
