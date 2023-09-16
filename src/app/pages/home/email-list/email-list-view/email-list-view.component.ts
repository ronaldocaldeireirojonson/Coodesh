import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SanatizedEmail } from 'shared-types/Email';

@Component({
  selector: 'app-email-list-view',
  templateUrl: './email-list-view.component.html',
})
export class EmailListViewComponent {
  @Input() emails: SanatizedEmail[] = [];
  @Output() selectEmailEvent = new EventEmitter<SanatizedEmail>();

  onEmailSelected(email: SanatizedEmail) {
    this.selectEmailEvent.emit(email);
  }
}
