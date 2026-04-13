import { Component, effect, inject, input } from '@angular/core';
import { Message } from '../../../../models';
import { BodyStore } from '../body-store';

@Component({
  selector: 'app-body-wrapper',
  standalone: false,
  templateUrl: './body-wrapper.html',
  styleUrl: './body-wrapper.scss',
})
export class BodyWrapper {
  conversations = input.required<Message[]>();

  bodyStore = inject(BodyStore);

  constructor() {
    effect(() => {
      this.bodyStore.updateRawConversations(this.conversations());
    });
  }
}
