import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EmailViewerViewComponent } from "./email-viewer-view.component";

describe("EmailViewerViewComponent", () => {
  let component: EmailViewerViewComponent;
  let fixture: ComponentFixture<EmailViewerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailViewerViewComponent],
    });
    fixture = TestBed.createComponent(EmailViewerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
