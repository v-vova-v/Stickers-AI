import { Component } from '@angular/core';
import {
  BaseModel,
  InputModel,
  SelectModel,
} from './ui-components/dynamic-form/dynamic-form-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tableau';
  formModel: BaseModel[] = [
    new InputModel('input', 'userName', 'text', '', [], true, 'Your Name'),
    new InputModel('input', 'userEmail', 'email', '', [], true, 'Your Email'),
    new SelectModel(
      'select',
      'userCity',
      'email',
      '',
      [
        { name: 'Kyiv', value: 'kyiv' },
        { name: 'Rivne', value: 'rivne' },
      ],
      true,
      'Your City'
    ),
  ];

  selectOptions = [
    { value: 'Kyiv', name: 'Kyiv' },
    { value: 'Rivne', name: 'Rivne' },
  ];

  public onClick(el: MouseEvent) {
    console.log(el);
  }

  public onChangeSelect(value: string) {
    console.log(value);
  }

  public onChange(value: string) {
    console.log(value);
  }
}
