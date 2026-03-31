import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarWrapper } from './toolbar-wrapper';

describe('ToolbarWrapper', () => {
  let component: ToolbarWrapper;
  let fixture: ComponentFixture<ToolbarWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
