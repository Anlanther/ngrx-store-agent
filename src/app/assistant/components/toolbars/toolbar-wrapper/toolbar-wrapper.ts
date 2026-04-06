import { Component, input, output } from '@angular/core';
import { Mode } from '../../../../constants/mode-enum';

@Component({
  selector: 'app-toolbar-wrapper',
  standalone: false,
  templateUrl: './toolbar-wrapper.html',
  styleUrl: './toolbar-wrapper.scss',
})
export class ToolbarWrapper {
  toolbar = input.required<Mode>();
  qpUpdated = output();

  get superSearch() {
    return Mode.SuperSearch;
  }

  get core() {
    return Mode.Core;
  }

  qpUpdatedHandler(params: any) {
    this.qpUpdated.emit(params);
  }
}
