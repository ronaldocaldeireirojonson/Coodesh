import { Component, OnDestroy, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { Subscription } from 'rxjs';
import { InboxService } from 'src/app/services/inbox.service';
import { SessionService } from 'src/app/services/session.service';
import {
  CacheSession,
  isCachedSessionValid,
} from 'src/app/utils/cache-handler';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
})
export class EmailInputComponent implements OnInit, OnDestroy {
  sessionSubscription: Subscription | undefined;
  emailSubscription: Subscription | undefined;
  currentEmail: string = '';

  constructor(
    private sessionService: SessionService,
    private inboxService: InboxService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    if (isCachedSessionValid()) {
      const email = localStorage.getItem('email') ?? '';
      this.sessionService.updateSession({
        id: localStorage.getItem('id') ?? '',
        email: email ?? '',
      });

      this.currentEmail = email;
      return;
    }

    this.sessionSubscription = this.sessionService
      .createSession()
      .subscribe(({ data }) => {
        if (!data) return;
        const { id, addresses, expiresAt } = data.introduceSession;
        this.currentEmail = addresses[0].address;
        CacheSession({ id, email: this.currentEmail, expiresAt });
        this.sessionService.updateSession({
          id: id,
          email: this.currentEmail,
        });
      });
  }

  refetch(): void {
    this.inboxService.refetch();
  }

  copyEmail(): void {
    this.clipboard.copy(this.currentEmail);
  }

  ngOnDestroy(): void {
    this.emailSubscription?.unsubscribe();
    this.sessionSubscription?.unsubscribe();
  }
}
