import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Session } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CmsDataService {
  getSessionsForUser(userId: string): Observable<Session[]> {
    return of([]);
  }
}
