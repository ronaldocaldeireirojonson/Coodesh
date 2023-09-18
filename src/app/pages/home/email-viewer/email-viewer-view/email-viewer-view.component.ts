import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SanatizedEmail } from "shared-types/Email";

@Component({
  selector: "app-email-viewer-view",
  templateUrl: "./email-viewer-view.component.html",
  styleUrls: ["./email-viewer-view.component.css"],
})
export class EmailViewerViewComponent {
  @Input() email: SanatizedEmail | undefined;
  @Input() open: boolean = false;
  @Output() toggleIsOpenEvent = new EventEmitter();

  onToggleIsOpen() {
    this.toggleIsOpenEvent.emit();
  }
}
