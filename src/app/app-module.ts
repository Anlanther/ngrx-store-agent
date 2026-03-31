import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { AssistantModule } from './assistant/assistant-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AssistantModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
