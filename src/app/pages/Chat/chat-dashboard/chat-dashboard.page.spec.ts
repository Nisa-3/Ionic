import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDashboardPage } from './chat-dashboard.page';

describe('ChatDashboardPage', () => {
  let component: ChatDashboardPage;
  let fixture: ComponentFixture<ChatDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
