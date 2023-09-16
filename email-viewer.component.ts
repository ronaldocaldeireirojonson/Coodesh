import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SanatizedEmail } from 'shared-types/Email';
import { InboxService } from 'src/app/services/inbox.service';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
})
export class EmailViewerComponent implements OnInit, OnDestroy {
  email: SanatizedEmail | undefined;
  emailSubscription: Subscription | undefined;
  isOpen: boolean = false;
  hasCollapsed: boolean = false;

  constructor(private inboxService: InboxService) {}

  ngOnInit(): void {
    this.emailSubscription = this.inboxService.openedEmail$.subscribe(
      (email) => {
        if (!email) return;
        this.email = email;
        if (!this.hasCollapsed) this.isOpen = true;
      }
    );
  }

  toggleIsOpen() {
    this.hasCollapsed = true;
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    this.emailSubscription?.unsubscribe();
  }
}
