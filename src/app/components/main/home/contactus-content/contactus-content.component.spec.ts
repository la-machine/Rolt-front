import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusContentComponent } from './contactus-content.component';

describe('ContactusContentComponent', () => {
  let component: ContactusContentComponent;
  let fixture: ComponentFixture<ContactusContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactusContentComponent]
    });
    fixture = TestBed.createComponent(ContactusContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
