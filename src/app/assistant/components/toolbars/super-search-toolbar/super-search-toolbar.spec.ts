import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSearchToolbar } from './super-search-toolbar';

describe('SuperSearchToolbar', () => {
  let component: SuperSearchToolbar;
  let fixture: ComponentFixture<SuperSearchToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperSearchToolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperSearchToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
