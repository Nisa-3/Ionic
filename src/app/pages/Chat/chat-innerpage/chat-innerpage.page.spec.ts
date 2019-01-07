import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInnerpagePage } from './chat-innerpage.page';

describe('ChatInnerpagePage', () => {
  let component: ChatInnerpagePage;
  let fixture: ComponentFixture<ChatInnerpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInnerpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInnerpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
