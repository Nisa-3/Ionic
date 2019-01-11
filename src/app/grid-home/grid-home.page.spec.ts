import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHomePage } from './grid-home.page';

describe('GridHomePage', () => {
  let component: GridHomePage;
  let fixture: ComponentFixture<GridHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
