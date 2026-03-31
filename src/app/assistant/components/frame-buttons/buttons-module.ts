import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SessionsButton } from './sessions-button/sessions-button';
import { SessionStore } from './sessions-button/state/session-store';

@NgModule({
  declarations: [SessionsButton],
  imports: [CommonModule],
  exports: [SessionsButton],
  providers: [SessionStore],
})
export class FrameButtonsModule {}
