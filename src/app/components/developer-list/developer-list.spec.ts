import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperList } from './developer-list';

describe('DeveloperList', () => {
  let component: DeveloperList;
  let fixture: ComponentFixture<DeveloperList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperList],
    }).compileComponents();

    fixture = TestBed.createComponent(DeveloperList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
