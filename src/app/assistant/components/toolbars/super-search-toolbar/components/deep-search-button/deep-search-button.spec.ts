import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepSearchButton } from './deep-search-button';

describe('DeepSearchButton', () => {
  let component: DeepSearchButton;
  let fixture: ComponentFixture<DeepSearchButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeepSearchButton],
    }).compileComponents();

    fixture = TestBed.createComponent(DeepSearchButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
