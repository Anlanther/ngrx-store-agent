import { Component, computed, inject, input } from '@angular/core';
import { Citation } from '../../../../addons/citation/citation';
import { ResponseType } from '../../../../constants';
import { Message, TextMessage } from '../../../../models';
import { MessageFormatterService } from '../../../../services';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {
  messages = input.required<Message[]>();

  messageFormatterService = inject(MessageFormatterService);

  formattedMessages = computed(() => {
    return this.messages().map((message) =>
      message.type === ResponseType.Text
        ? { ...message, text: this.messageFormatterService.formatMdToHtml(message.text) }
        : message,
    );
  });

  parsers = [Citation];

  isTextMessage(message: Message): message is TextMessage {
    return message.type === ResponseType.Text;
  }
}
