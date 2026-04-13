import { Component, effect, inject, input, output } from '@angular/core';
import { SessionStore } from './session-store';

@Component({
  selector: 'app-sessions-button',
  standalone: false,
  templateUrl: './sessions-button.html',
  styleUrl: './sessions-button.scss',
})
export class SessionsButton {
  userId = input.required<string>();
  activeSessionId = output<string>();

  storeService = inject(SessionStore);

  constructor() {
    effect(() => {
      this.activeSessionId.emit(this.storeService.activeSessionId());
    });
  }
}
