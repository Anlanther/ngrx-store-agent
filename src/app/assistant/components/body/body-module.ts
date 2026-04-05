import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BodyWrapper } from './body-wrapper/body-wrapper';
import { Messages } from './messages/messages';

@NgModule({
  declarations: [BodyWrapper, Messages],
  imports: [CommonModule],
  exports: [BodyWrapper],
})
export class BodyModule {}
