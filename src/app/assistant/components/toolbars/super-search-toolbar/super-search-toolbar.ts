import { Component, inject } from '@angular/core';
import { SuperSearchToolbarStore } from './state/super-search-toolbar-store';

@Component({
  selector: 'app-super-search-toolbar',
  standalone: false,
  templateUrl: './super-search-toolbar.html',
  styleUrl: './super-search-toolbar.scss',
})
export class SuperSearchToolbar {
  superSearchToolbarStore = inject(SuperSearchToolbarStore);
}
