import { Component, inject, input } from '@angular/core';
import { ResponseType } from '../../../../constants';
import { Message, TextMessage } from '../../../../models';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {
  messages = input.required<Message[]>();

  safeHtmlPipe = inject(SafeHtmlPipe);

  textHtml = `<app-sessions-button></app-sessions-button>`;

  isTextMessage(message: Message): message is TextMessage {
    return message.type === ResponseType.Text;
  }
}
