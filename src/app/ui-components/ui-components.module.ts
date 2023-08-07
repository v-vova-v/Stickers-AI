import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { DynamicFormService } from './services/dynamic-form.service';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    SpinnerComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [DynamicFormService],
  exports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    SpinnerComponent,
    DynamicFormComponent,
  ],
})
export class UiComponentsModule {}
