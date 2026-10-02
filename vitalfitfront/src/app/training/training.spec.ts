import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Training } from './training';

describe('Training', () => {
  let component: Training;
  let fixture: ComponentFixture<Training>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Training],
    }).compileComponents();

    fixture = TestBed.createComponent(Training);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
