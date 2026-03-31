import { Component } from '@angular/core';
import { WidgetInput } from './models/widget-input-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  widgetInput: WidgetInput = { workspaceId: 'super-search', userId: 'user-1' };
}
