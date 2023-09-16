import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { EmailListResponse, SanatizedEmail } from 'shared-types/Email';
import { GET_EMAILS } from './operations/graphql.operations';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  private openedEmailSource = new BehaviorSubject<SanatizedEmail | null>(null);
  openedEmail$ = this.openedEmailSource.asObservable();
  query: QueryRef<EmailListResponse> | undefined;

  constructor(private apollo: Apollo) {}

  getEmailList(id: string): QueryRef<EmailListResponse> {
    this.query = this.apollo.watchQuery<EmailListResponse>({
      query: GET_EMAILS,
      variables: {
        id,
      },
      pollInterval: 15000,
    });

    return this.query;
  }

  refetch() {
    this.query?.refetch();
  }

  openEmail(openedEmail: SanatizedEmail) {
    this.openedEmailSource.next(openedEmail);
  }
}
