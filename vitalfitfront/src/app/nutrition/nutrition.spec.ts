import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutrition } from './nutrition';

describe('Nutrition', () => {
  let component: Nutrition;
  let fixture: ComponentFixture<Nutrition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nutrition],
    }).compileComponents();

    fixture = TestBed.createComponent(Nutrition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
