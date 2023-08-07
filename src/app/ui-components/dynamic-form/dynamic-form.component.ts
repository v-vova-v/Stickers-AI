import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseModel } from './dynamic-form-models';

import { DynamicFormService } from '../services/dynamic-form.service';

@Component({
  selector: 'ui-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input()
  formModel: BaseModel[] = [];
  @Input()
  submitButtonName: string = 'Submit';
  @Input()
  submitDisabled: boolean = false;
  @Output()
  onSubmit: EventEmitter<{ [key: string]: any }> = new EventEmitter();

  form!: FormGroup;

  constructor(private formService: DynamicFormService) {}

  submitFrom() {
    this.onSubmit.emit(this.form.getRawValue());
  }

  ngOnInit(): void {
    this.form = this.formService.getFormGroup(this.formModel);
  }
}
