import { Component, input } from '@angular/core';
import { Conversation } from '../../../models/conversation-model';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
  conversations = input.required<Conversation[]>();
}
