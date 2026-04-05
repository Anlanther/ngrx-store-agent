import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { WORKSPACE_MODE_MAP } from '../../constants';
import { Mode } from '../../constants/mode-enum';

type AssistantState = {
  mode: Mode;
  disclaimerMessage: string;
  activeSessionId: string;
  queryParams: { [key: string]: any };
  conversations: any[];
  // conversations: Conversation[];
};

const initialState: AssistantState = {
  mode: Mode.Core,
  activeSessionId: '',
  queryParams: {},
  disclaimerMessage: 'This is a demo assistant. Please do not share sensitive information.',
  conversations: [],
};

export const AssistantStore = signalStore(
  withState(initialState),
  withProps((store) => {
    const service = WORKSPACE_MODE_MAP.get(store.mode())?.service;
    if (!service) {
      throw new Error(`No service found for mode ${store.mode()}`);
    }
    return { service: inject(service) };
  }),
  withMethods(({ service, ...store }) => ({
    updateMode(mode: Mode): void {
      patchState(store, (state) => ({ ...state, mode }));
    },
    setActiveSessionId(sessionId: string): void {
      patchState(store, (state) => ({ ...state, activeSessionId: sessionId }));
    },

    postResponse: rxMethod<string>(
      pipe(
        switchMap((message) => {
          if (!store.activeSessionId()) {
            const newSessionId = crypto.randomUUID();
            patchState(store, (state) => ({ ...state, activeSessionId: newSessionId }));
          }

          return service
            .postResponse({
              queryParams: store.queryParams(),
              sessionId: store.activeSessionId(),
              message,
            })
            .pipe(
              switchMap((response) => {
                patchState(store, (state) => ({
                  ...state,
                  conversations: [...state.conversations, response],
                }));
                return [response];
              }),
            );
        }),
      ),
    ),
  })),
);
