import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreToolbar } from './core-toolbar';

describe('CoreToolbar', () => {
  let component: CoreToolbar;
  let fixture: ComponentFixture<CoreToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreToolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
