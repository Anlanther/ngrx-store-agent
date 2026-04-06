import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdRenderer } from './md-renderer';

describe('MdRenderer', () => {
  let component: MdRenderer;
  let fixture: ComponentFixture<MdRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdRenderer],
    }).compileComponents();

    fixture = TestBed.createComponent(MdRenderer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
