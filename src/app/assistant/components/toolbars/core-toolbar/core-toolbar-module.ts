import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreToolbar } from './core-toolbar';

@NgModule({
  declarations: [CoreToolbar],
  imports: [CommonModule],
  exports: [CoreToolbar],
})
export class CoreToolbarModule {}
