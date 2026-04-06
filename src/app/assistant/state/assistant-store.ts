import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { Mode, WORKSPACE_MODE_MAP } from '../../constants';
import { BaseAgentService, Message } from '../../models';

type AssistantState = {
  mode: Mode;
  disclaimerMessage: string;
  activeSessionId: string;
  queryParams: { [key: string]: any };
  conversations: Message[];
  isLoading: boolean;
};

const initialState: AssistantState = {
  mode: Mode.Core,
  activeSessionId: '',
  queryParams: {},
  disclaimerMessage: 'This is a demo assistant. Please do not share sensitive information.',
  conversations: [],
  isLoading: false,
};

export const AssistantStore = signalStore(
  withState(initialState),
  withProps(() => {
    const servicesObj: { [key: string]: BaseAgentService } = {};
    WORKSPACE_MODE_MAP.forEach((value) => {
      servicesObj[value.mode] = inject(value.service);
    });

    return { ...servicesObj };
  }),
  withMethods((store) => ({
    updateMode(mode: Mode): void {
      patchState(store, (state) => ({ ...state, mode }));
    },
    setActiveSessionId(sessionId: string): void {
      patchState(store, (state) => ({ ...state, activeSessionId: sessionId }));
    },
    updateQueryParams(params: { [key: string]: any }): void {
      patchState(store, (state) => ({
        ...state,
        queryParams: { ...state.queryParams, ...params },
      }));
    },

    postResponse: rxMethod<string>(
      pipe(
        tap(() => {
          patchState(store, (state) => ({ ...state, isLoading: true }));
          if (!store.activeSessionId()) {
            const newSessionId = crypto.randomUUID();
            patchState(store, (state) => ({ ...state, activeSessionId: newSessionId }));
          }
        }),
        switchMap((message) => {
          return store[store.mode()]
            .postResponse({
              queryParams: store.queryParams(),
              sessionId: store.activeSessionId(),
              message,
            })
            .pipe(
              tapResponse({
                next: (response) => {
                  patchState(store, (state) => ({
                    ...state,
                    conversations: [...state.conversations, response],
                  }));
                },
                error: (error) => {},
                finalize: () => patchState(store, (state) => ({ ...state, isLoading: false })),
              }),
            );
        }),
      ),
    ),
  })),
);
