import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Assistant } from './assistant';
import { BodyModule } from './components/body/body-module';
import { FrameButtonsModule } from './components/frame-buttons/buttons-module';
import { ToolbarModule } from './components/toolbars/toolbar-module';
import { AssistantStore } from './state/assistant-store';

@NgModule({
  declarations: [Assistant],
  imports: [CommonModule, ToolbarModule, FrameButtonsModule, BodyModule],
  exports: [Assistant],
  providers: [AssistantStore],
})
export class AssistantModule {}
