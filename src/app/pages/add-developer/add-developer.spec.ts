import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeveloper } from './add-developer';

describe('AddDeveloper', () => {
  let component: AddDeveloper;
  let fixture: ComponentFixture<AddDeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeveloper],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDeveloper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
