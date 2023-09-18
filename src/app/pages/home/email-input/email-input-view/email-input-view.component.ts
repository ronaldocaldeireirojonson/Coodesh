import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-email-input-view',
  templateUrl: './email-input-view.component.html',
})
export class EmailInputViewComponent {
  @Input() email: string = '';
  @Input() timer: number = 0;
  @Output() refetchEvent = new EventEmitter();
  @Output() copyEvent = new EventEmitter();

  onCopy() {
    this.copyEvent.emit();
  }

  onRefetch() {
    this.refetchEvent.emit();
  }
}
