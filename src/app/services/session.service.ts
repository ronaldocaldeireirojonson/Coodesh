import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SessionResponse } from 'shared-types/Session';
import { SESSION } from './operations/graphql.operations';
import { BehaviorSubject } from 'rxjs';
import { SessionCache } from '../utils/cache-handler';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessionSource = new BehaviorSubject<Omit<
    SessionCache,
    'expiresAt'
  > | null>(null);
  session$ = this.sessionSource.asObservable();

  constructor(private apollo: Apollo) {}

  createSession() {
    return this.apollo.mutate<SessionResponse>({ mutation: SESSION });
  }

  updateSession(state: Omit<SessionCache, 'expiresAt'>) {
    this.sessionSource.next(state);
  }
}
