import { Component, effect, inject, output } from '@angular/core';
import { SuperSearchToolbarStore } from './state/super-search-toolbar-store';

interface SuperSearchToolbarQueryParams {
  isDeepSearchEnabled: boolean;
}

@Component({
  selector: 'app-super-search-toolbar',
  standalone: false,
  templateUrl: './super-search-toolbar.html',
  styleUrl: './super-search-toolbar.scss',
})
export class SuperSearchToolbar {
  superSearchToolbarStore = inject(SuperSearchToolbarStore);

  qpUpdated = output<SuperSearchToolbarQueryParams>();
  constructor() {
    effect(() => {
      this.qpUpdated.emit({
        isDeepSearchEnabled: this.superSearchToolbarStore.deepResearchActive(),
      });
    });
  }

  onDeepSearchToggle(enabled: any) {
    this.superSearchToolbarStore.updateDeepResearchActive(enabled);
  }
}
