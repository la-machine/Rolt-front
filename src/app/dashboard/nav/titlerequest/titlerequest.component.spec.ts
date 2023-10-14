import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlerequestComponent } from './titlerequest.component';

describe('TitlerequestComponent', () => {
  let component: TitlerequestComponent;
  let fixture: ComponentFixture<TitlerequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlerequestComponent]
    });
    fixture = TestBed.createComponent(TitlerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
