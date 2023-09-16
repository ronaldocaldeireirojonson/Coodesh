import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListViewComponent } from './email-list-view.component';

describe('EmailListViewComponent', () => {
  let component: EmailListViewComponent;
  let fixture: ComponentFixture<EmailListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailListViewComponent]
    });
    fixture = TestBed.createComponent(EmailListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
