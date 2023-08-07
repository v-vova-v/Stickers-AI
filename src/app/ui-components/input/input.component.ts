import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatFormFieldAppearance } from '@angular/material/form-field';

import { InputType } from './types';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input()
  type: InputType = 'text';
  @Input()
  label: string = '';
  @Input()
  value: string = '';
  @Input()
  variant: MatFormFieldAppearance = 'outline';
  @Input()
  form!: FormGroup;
  @Input()
  controlName: string | null = null;
  @Output()
  onChange: EventEmitter<string> = new EventEmitter();

  onChangeInput(e: Event) {
    this.onChange.emit((e.target as HTMLInputElement).value);
  }

  ngOnInit() {}
}
