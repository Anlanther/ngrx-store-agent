import { Component, input } from '@angular/core';

@Component({
  selector: 'app-body-wrapper',
  standalone: false,
  templateUrl: './body-wrapper.html',
  styleUrl: './body-wrapper.scss',
})
export class BodyWrapper {
  conversations = input.required<any>();
  // conversations = input.required<Conversation[]>();

  trackByConversationId(index: number, conversation: any): any {
    return conversation.id || index;
  }
}
