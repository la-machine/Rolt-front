import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaryComponent } from './notary.component';

describe('NotaryComponent', () => {
  let component: NotaryComponent;
  let fixture: ComponentFixture<NotaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaryComponent]
    });
    fixture = TestBed.createComponent(NotaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
