import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SanatizedEmail } from 'shared-types/Email';
import { InboxService } from 'src/app/services/inbox.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
})
export class EmailListComponent implements OnInit, OnDestroy {
  currentId: string | undefined;
  inboxSubsctipion: Subscription | undefined;
  sessionSubsctipion: Subscription | undefined;
  emails: SanatizedEmail[] = [];

  constructor(
    private inboxService: InboxService,
    private sessionService: SessionService,
    private notificationService: NotificationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.sessionSubsctipion = this.sessionService.session$.subscribe((data) => {
      if (!data) return;
      this.currentId = data.id;
    });

    if (!this.currentId) return;

    this.inboxSubsctipion = this.inboxService
      .getEmailList(this.currentId)
      .valueChanges.subscribe(({ data }) => {
        if (!data) return;

        this.emails = data.session.mails.map((x) => {
          return {
            ...x,
            html: this.sanitizer.bypassSecurityTrustHtml(x.html),
          };
        });

        this.notificationService.showNotification(this.emails[0]);
      });
  }

  selectEmail(email: SanatizedEmail) {
    console.log(email);
    this.inboxService.openEmail(email);
  }

  ngOnDestroy(): void {
    this.inboxSubsctipion?.unsubscribe();
    this.sessionSubsctipion?.unsubscribe();
  }
}
