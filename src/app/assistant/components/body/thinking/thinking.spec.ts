import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thinking } from './thinking';

describe('Thinking', () => {
  let component: Thinking;
  let fixture: ComponentFixture<Thinking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Thinking],
    }).compileComponents();

    fixture = TestBed.createComponent(Thinking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
