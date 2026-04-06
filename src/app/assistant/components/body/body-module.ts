import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { BodyWrapper } from './body-wrapper/body-wrapper';
import { MdRenderer } from './md-renderer/md-renderer';
import { Messages } from './messages/messages';
import { Thinking } from './thinking/thinking';

@NgModule({
  declarations: [BodyWrapper, Messages, MdRenderer, Thinking],
  imports: [CommonModule, SafeHtmlPipe, MarkdownModule.forRoot()],
  exports: [BodyWrapper],
  providers: [SafeHtmlPipe],
})
export class BodyModule {}
