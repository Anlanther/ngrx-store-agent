import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { ResponseType } from '../../../constants';
import { Message } from '../../../models';
import { MessageFormatterService } from '../../../services';

type BodyState = {
  rawConversations: Message[];
};

const initialState: BodyState = {
  rawConversations: [],
};

export const BodyStore = signalStore(
  withState(initialState),
  withProps(() => {
    const messageFormatterService = inject(MessageFormatterService);
    return { messageFormatterService };
  }),
  withComputed((state) => ({
    thinkingConversations: computed(() => {
      return state
        .rawConversations()
        .filter((message) => message.type === ResponseType.Think)
        .map((message) => message.text)
        .join(' ');
    }),
    displayConversations: computed(() => {
      const typesForDisplay = [ResponseType.Text, ResponseType.Chunks];
      const messages = state
        .rawConversations()
        .filter((message) => typesForDisplay.includes(message.type));
      const groupedResponse = messages.reduce((groups, message) => {
        if (groups.length === 0) {
          groups.push({ ...message });
          return groups;
        }

        const lastGroup = groups[groups.length - 1];

        if (
          message.origin === lastGroup.origin &&
          lastGroup.type === ResponseType.Text &&
          message.type === ResponseType.Text
        ) {
          groups[groups.length - 1] = {
            ...lastGroup,
            text: lastGroup.text + message.text,
          };
        } else {
          groups.push({ ...message });
        }
        return groups;
      }, [] as Message[]);

      return groupedResponse.map((message) =>
        message.type === ResponseType.Text
          ? { ...message, text: state.messageFormatterService.formatMdToHtml(message.text) }
          : message,
      );
    }),
  })),
  withMethods((store) => ({
    updateRawConversations(conversations: Message[]) {
      patchState(store, (state) => ({ ...state, rawConversations: conversations }));
    },
  })),
);
