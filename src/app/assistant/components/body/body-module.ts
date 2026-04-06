import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { MessageFormatterService } from '../../../services';
import { BodyWrapper } from './body-wrapper/body-wrapper';
import { Messages } from './messages/messages';
import { Thinking } from './thinking/thinking';

@NgModule({
  declarations: [BodyWrapper, Messages, Thinking],
  imports: [CommonModule, SafeHtmlPipe, DynamicHooksComponent],
  exports: [BodyWrapper],
  providers: [SafeHtmlPipe, MessageFormatterService],
})
export class BodyModule {}
