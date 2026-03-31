import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreToolbar } from './core-toolbar/core-toolbar';
import { SuperSearchToolbarStore } from './super-search-toolbar/state/super-search-toolbar-store';
import { SuperSearchToolbar } from './super-search-toolbar/super-search-toolbar';
import { ToolbarWrapper } from './toolbar-wrapper/toolbar-wrapper';

@NgModule({
  declarations: [SuperSearchToolbar, CoreToolbar, ToolbarWrapper],
  imports: [CommonModule],
  exports: [SuperSearchToolbar, CoreToolbar, ToolbarWrapper],
  providers: [SuperSearchToolbarStore],
})
export class ToolbarModule {}
