import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomContentComponent } from './welcom-content.component';

describe('WelcomContentComponent', () => {
  let component: WelcomContentComponent;
  let fixture: ComponentFixture<WelcomContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomContentComponent]
    });
    fixture = TestBed.createComponent(WelcomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
