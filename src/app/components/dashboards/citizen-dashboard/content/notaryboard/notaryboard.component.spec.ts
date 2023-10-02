import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaryboardComponent } from './notaryboard.component';

describe('NotaryboardComponent', () => {
  let component: NotaryboardComponent;
  let fixture: ComponentFixture<NotaryboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotaryboardComponent]
    });
    fixture = TestBed.createComponent(NotaryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
