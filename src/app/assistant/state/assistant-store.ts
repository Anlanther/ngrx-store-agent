import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Mode } from '../../constants/mode-enum';
import { Conversation } from '../../models/conversation-model';

type AssistantState = {
  mode: Mode;
  disclaimerMessage: string;
  conversations: Conversation[];
};

const initialState: AssistantState = {
  mode: Mode.Core,
  disclaimerMessage: 'This is a demo assistant. Please do not share sensitive information.',
  conversations: [],
};

export const AssistantStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    updateMode(mode: Mode): void {
      patchState(store, (state) => ({ ...state, mode }));
    },
  })),
);
