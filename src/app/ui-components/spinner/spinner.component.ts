import { Component, Input } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'ui-spinner',
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input()
  color: ThemePalette;
  @Input()
  diameter: number = 50;
}
