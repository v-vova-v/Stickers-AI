import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

import { ButtonType } from './types';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() type: ButtonType = 'button';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onClickButton(e: MouseEvent) {
    this.onClick.emit(e);
  }
}
