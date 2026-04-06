import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DeepSearchButton } from './components/deep-search-button/deep-search-button';
import { SuperSearchToolbar } from './super-search-toolbar';

@NgModule({
  declarations: [SuperSearchToolbar, DeepSearchButton],
  imports: [CommonModule, FormsModule, MatSlideToggleModule, ReactiveFormsModule],
  exports: [SuperSearchToolbar],
})
export class SuperSearchToolbarModule {}
