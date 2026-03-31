import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sessions-button',
  standalone: false,
  templateUrl: './sessions-button.html',
  styleUrl: './sessions-button.scss',
})
export class SessionsButton {
  userId = input.required<string>();
}
