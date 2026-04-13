import { Component, inject } from '@angular/core';
import { Citation } from '../../../../addons/citation/citation';
import { ResponseType } from '../../../../constants';
import { Message, TextMessage } from '../../../../models';
import { BodyStore } from '../state/body-store';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {
  bodyStore = inject(BodyStore);

  parsers = [Citation];

  isTextMessage(message: Message): message is TextMessage {
    return message.type === ResponseType.Text;
  }
}
