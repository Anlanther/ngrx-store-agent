import { Component, effect, inject, input } from '@angular/core';
import { Mode, WORKSPACE_MODE_MAP } from '../constants';
import { WidgetInput } from '../models';
import { AssistantStore } from './assistant-store';

@Component({
  selector: 'app-assistant',
  standalone: false,
  templateUrl: './assistant.html',
  styleUrl: './assistant.scss',
})
export class Assistant {
  widgetInput = input.required<WidgetInput>();

  assistantStore = inject(AssistantStore);

  constructor() {
    effect(() => {
      this.assistantStore.updateMode(
        WORKSPACE_MODE_MAP.get(this.widgetInput().workspaceId)?.mode || Mode.Core,
      );
    });
  }

  onQueryParamsUpdated(params: any) {
    this.assistantStore.updateQueryParams(params);
  }
}
