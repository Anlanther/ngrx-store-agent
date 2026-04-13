import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Assistant } from './assistant';
import { AssistantStore } from './assistant-store';
import { BodyModule } from './components/body/body-module';
import { FrameButtonsModule } from './components/frame-buttons/buttons-module';
import { ToolbarModule } from './components/toolbars/toolbar-module';

@NgModule({
  declarations: [Assistant],
  imports: [CommonModule, ToolbarModule, FrameButtonsModule, BodyModule, MatButtonModule],
  exports: [Assistant],
  providers: [AssistantStore],
})
export class AssistantModule {}
