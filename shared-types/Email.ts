import { SafeHtml } from '@angular/platform-browser';

export type Email = {
  headerSubject: string;
  html: string;
  fromAddr: string;
};

export type SanatizedEmail = Omit<Email, 'html'> & { html: SafeHtml };

export interface EmailListResponse {
  session: {
    mails: Email[];
  };
}
