import { Component, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deep-search-button',
  standalone: false,
  templateUrl: './deep-search-button.html',
  styleUrl: './deep-search-button.scss',
})
export class DeepSearchButton {
  checked = output<boolean>();

  isChecked = new FormControl(false, { nonNullable: true });

  constructor() {
    this.isChecked.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.checked.emit(value);
    });
  }
}
