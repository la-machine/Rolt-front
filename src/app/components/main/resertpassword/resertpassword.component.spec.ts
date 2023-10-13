import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResertpasswordComponent } from './resertpassword.component';

describe('ResertpasswordComponent', () => {
  let component: ResertpasswordComponent;
  let fixture: ComponentFixture<ResertpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResertpasswordComponent]
    });
    fixture = TestBed.createComponent(ResertpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
