import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { Session } from '../../../../../models';
import { CmsDataService } from '../../../../../services';

type SessionState = {
  activeSessionId: string;
  sessions: Session[];
};

const initialState: SessionState = {
  activeSessionId: '',
  sessions: [],
};

export const SessionStore = signalStore(
  withState(initialState),
  withMethods((store, cmsService = inject(CmsDataService)) => ({
    getSessions: rxMethod<string>(
      pipe(
        switchMap((userId) => {
          return cmsService.getSessionsForUser(userId).pipe(
            tapResponse({
              next: (sessions) => patchState(store, { sessions }),
              error: () => {},
            }),
          );
        }),
      ),
    ),
  })),
);
