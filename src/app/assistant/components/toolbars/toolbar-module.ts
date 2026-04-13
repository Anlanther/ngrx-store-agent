import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreToolbarModule } from './core-toolbar/core-toolbar-module';
import { SuperSearchToolbarModule } from './super-search-toolbar/super-search-toolbar-module';
import { SuperSearchToolbarStore } from './super-search-toolbar/super-search-toolbar-store';
import { ToolbarWrapper } from './toolbar-wrapper/toolbar-wrapper';

@NgModule({
  declarations: [ToolbarWrapper],
  imports: [CommonModule, SuperSearchToolbarModule, CoreToolbarModule],
  exports: [ToolbarWrapper],
  providers: [SuperSearchToolbarStore],
})
export class ToolbarModule {}
