import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrycontentComponent } from './registrycontent.component';

describe('RegistrycontentComponent', () => {
  let component: RegistrycontentComponent;
  let fixture: ComponentFixture<RegistrycontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrycontentComponent]
    });
    fixture = TestBed.createComponent(RegistrycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
