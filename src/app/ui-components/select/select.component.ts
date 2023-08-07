import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatSelectChange } from '@angular/material/select';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { SelectOptions } from './type';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input()
  options: SelectOptions[] = [];
  @Input()
  placeholder: string = '';
  @Input()
  variant: MatFormFieldAppearance = 'outline';
  @Input()
  form!: FormGroup;
  @Input()
  controlName: string | null = null;
  @Output()
  onChange: EventEmitter<string> = new EventEmitter();

  onSelectHandler(e: MatSelectChange) {
    this.onChange.emit(e.value);
  }
}
