import { Component, input } from '@angular/core';

@Component({
  selector: 'app-thinking',
  standalone: false,
  templateUrl: './thinking.html',
  styleUrl: './thinking.scss',
})
export class Thinking {
  message = input.required<string>();
}
