import { Injectable } from '@angular/core';
import { SanatizedEmail } from 'shared-types/Email';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  showNotification(email: SanatizedEmail) {
    if (Notification.permission !== 'granted') return;
    if (document.visibilityState !== 'hidden') return;
    if (!email) return;

    new Notification(email?.fromAddr ?? '', {
      body: email?.headerSubject ?? '',
    });
  }

  requestPermission() {
    Notification.requestPermission();
  }
}
