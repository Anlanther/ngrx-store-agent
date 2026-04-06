import { Component, computed, input } from '@angular/core';
import { ResponseType } from '../../../../constants';
import { Message } from '../../../../models';

@Component({
  selector: 'app-body-wrapper',
  standalone: false,
  templateUrl: './body-wrapper.html',
  styleUrl: './body-wrapper.scss',
})
export class BodyWrapper {
  conversations = input.required<Message[]>();

  thinkingMessage = computed(() => {
    const conversationMessages = this.conversations().filter(
      (message) => message.type === ResponseType.Think,
    );
    const thinkMessage = conversationMessages.map((message) => message.text).join();
    return thinkMessage;
  });
  groupedDisplayMessages = computed(() => {
    const typesForDisplay = [ResponseType.Text, ResponseType.Chunks];
    const messages = this.conversations().filter((message) =>
      typesForDisplay.includes(message.type),
    );
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

    return groupedResponse;
  });
}
