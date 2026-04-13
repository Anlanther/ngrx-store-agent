import { Component, inject } from '@angular/core';
import { BodyStore } from '../body-store';

@Component({
  selector: 'app-thinking',
  standalone: false,
  templateUrl: './thinking.html',
  styleUrl: './thinking.scss',
})
export class Thinking {
  bodyStore = inject(BodyStore);
}
