import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsButton } from './sessions-button';

describe('SessionsButton', () => {
  let component: SessionsButton;
  let fixture: ComponentFixture<SessionsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionsButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SessionsButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
