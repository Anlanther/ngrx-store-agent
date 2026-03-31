import { Component, effect, inject, input } from '@angular/core';
import { Mode } from '../constants/mode-enum';
import { WidgetInput } from '../models/widget-input-model';
import { AssistantStore } from './state/assistant-store';

@Component({
  selector: 'app-assistant',
  standalone: false,
  templateUrl: './assistant.html',
  styleUrl: './assistant.scss',
})
export class Assistant {
  widgetInput = input.required<WidgetInput>();

  assistantStore = inject(AssistantStore);

  private workspaceModeMap: Map<string, Mode> = new Map([
    ['super-search', Mode.SuperSearch],
    ['core', Mode.Core],
  ]);

  constructor() {
    effect(() => {
      this.assistantStore.updateMode(
        this.workspaceModeMap.get(this.widgetInput().workspaceId) || Mode.Core,
      );
    });
  }
}
