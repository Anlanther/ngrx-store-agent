import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SessionStore } from './sessions-button/session-store';
import { SessionsButton } from './sessions-button/sessions-button';

@NgModule({
  declarations: [SessionsButton],
  imports: [CommonModule],
  exports: [SessionsButton],
  providers: [SessionStore],
})
export class FrameButtonsModule {}
