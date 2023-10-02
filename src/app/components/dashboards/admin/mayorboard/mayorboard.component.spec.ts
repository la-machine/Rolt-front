import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorboardComponent } from './mayorboard.component';

describe('MayorboardComponent', () => {
  let component: MayorboardComponent;
  let fixture: ComponentFixture<MayorboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayorboardComponent]
    });
    fixture = TestBed.createComponent(MayorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
