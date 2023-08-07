import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseModel } from '../dynamic-form/dynamic-form-models';

@Injectable()
export class DynamicFormService {
  getFormGroup(formModel: BaseModel[]) {
    const group: any = {};
    formModel.forEach((model) => {
      group[model.name] = model.required
        ? new FormControl(model.value || '', Validators.required)
        : new FormControl(model.value || '');
    });

    return new FormGroup(group);
  }
}
